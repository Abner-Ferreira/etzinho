import React, { createContext, useEffect, useState } from 'react'
import { Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { auth, db } from '@/src/services/firebaseConfig'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth'
import { get, ref, set } from 'firebase/database'
import { router } from 'expo-router'
import Toast from 'react-native-toast-message'

// Tempo limite da sessao (1 hora)
const SESSION_DURATION = 60 * 60 * 1000

interface UserType {
  uid: string
  nome: string
  email: string
}

interface AuthContextType {
  user: UserType | null
  loading: boolean
  authLoading: boolean
  login: (email: string, password: string) => Promise<void>
  createAccount: (
    name: string,
    email: string,
    password: string
  ) => Promise<void>
  forgetPassword: (email: string) => Promise<void>
  logout: () => Promise<void>
  emailCadastrado: string
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  authLoading: false,
  login: async () => {},
  createAccount: async () => {},
  forgetPassword: async () => {},
  logout: async () => {},
  emailCadastrado: '',
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null)
  const [emailCadastrado, setEmailCadastrado] = useState('')
  const [loading, setLoading] = useState(true)
  const [authLoading, setAuthLoading] = useState(false)

  // Verifica login e expiracao da sessao
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async currentUser => {
      const loginTimestamp = await AsyncStorage.getItem('loginTimestamp')

      if (currentUser && loginTimestamp) {
        const elapsed = Date.now() - Number(loginTimestamp)

        if (elapsed > SESSION_DURATION) {
          // Sessao expirou
          await handleLogout()
          Alert.alert('Sessão expirada', 'Por favor, faça login novamente.')
          setLoading(false)
          return
        }

        // Sessao ainda valida
        const snapshot = await get(ref(db, `users/${currentUser.uid}`))
        if (snapshot.exists()) {
          setUser({
            uid: currentUser.uid,
            nome: snapshot.val().name,
            email: snapshot.val().email,
          })
        }
      } else {
        setUser(null)
      }

      setLoading(false)
    })

    return unsubscribe
  }, [])

  // Mensagens de erros do firebase
  const firebaseErrorMessages: Record<string, string> = {
    'auth/invalid-email': 'O endereço de e-mail é inválido.',
    'auth/user-disabled': 'Esta conta foi desativada.',
    'auth/user-not-found':
      'Usuário não encontrado. Verifique o e-mail informado.',
    'auth/wrong-password': 'Senha incorreta. Tente novamente.',
    'auth/email-already-in-use': 'Este e-mail já está em uso por outra conta.',
    'auth/too-many-requests': 'Muitas tentativas. Tente novamente mais tarde.',
    'auth/network-request-failed': 'Falha na conexão. Verifique sua internet.',
    'auth/internal-error': 'Erro interno. Tente novamente mais tarde.',
  }

  // Funcao login
  async function login(email: string, password: string) {
    setAuthLoading(true)
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      const firebaseUser = userCredential.user
      const snapshot = await get(ref(db, `users/${firebaseUser.uid}`))

      if (snapshot.exists()) {
        setUser({
          uid: firebaseUser.uid,
          nome: snapshot.val().name,
          email: snapshot.val().email,
        })

        await AsyncStorage.setItem('loginTimestamp', Date.now().toString())

        Alert.alert('Bem-vindo!', `Olá, ${snapshot.val().name}!`)
      }
    } catch (error: any) {
      const message =
        firebaseErrorMessages[error.code] ||
        'Erro ao fazer login. Verifique seus dados.'
      Alert.alert('Erro no login', message)
      console.log('Erro Firebase login:', error.code)
    } finally {
      setAuthLoading(false)
    }
  }

  // Funcao criar conta
  async function createAccount(name: string, email: string, password: string) {
    setAuthLoading(true)
    try {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(async userCredential => {
          const user = userCredential.user
          await set(ref(db, 'users/' + user.uid), { name, email }).then(() => {
            Toast.show({
              type: 'success',
              text1: 'Sucesso',
              text2: 'Conta criada com sucesso!',
            })
          })
        })
        .catch((error: any) => {
          const message =
            firebaseErrorMessages[error.code] ||
            'Erro ao criar conta. Tente novamente.'
          Toast.show({
            type: 'error',
            text1: 'Erro no cadastro',
            text2: message,
          })
        })
    } catch (error: any) {
      const message =
        firebaseErrorMessages[error.code] ||
        'Erro ao criar conta. Tente novamente.'
      Toast.show({
        type: 'error',
        text1: 'Erro no cadastro',
        text2: message,
      })
    } finally {
      setAuthLoading(false)
    }
  }

  // Funcao esqueceu senha
  async function forgetPassword(email: string) {
    setAuthLoading(true)
    try {
      await sendPasswordResetEmail(auth, email)
      Alert.alert(
        'Verifique seu e-mail',
        'Se o e-mail estiver cadastrado, você receberá um link para redefinir sua senha.',
        [
          {
            text: 'Ok',
            onPress: () => {
              router.push('/login')
              setEmailCadastrado(email)
            },
          },
        ]
      )
    } catch (error: any) {
      const errorMessage =
        firebaseErrorMessages[error.code] ||
        'Erro ao enviar o e-mail. Verifique seus dados.'
      Alert.alert('Erro', errorMessage)
      console.log('Erro Firebase forgetPassword:', error.code)
    } finally {
      setAuthLoading(false)
    }
  }

  // Funcao logout
  async function handleLogout() {
    try {
      await signOut(auth)
      await AsyncStorage.removeItem('loginTimestamp')
      setUser(null)
    } catch (error) {
      console.log('Erro ao fazer logout:', error)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        authLoading,
        login,
        createAccount,
        forgetPassword,
        logout: handleLogout,
        emailCadastrado,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
