import { auth, db } from '@/src/services/firebaseConfig'
import { router } from 'expo-router'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth'
import { get, ref, set } from 'firebase/database'
import React, { createContext, useEffect, useState } from 'react'
import { Alert } from 'react-native'

interface UserType {
  uid: string
  nome: string
  email: string
}

interface AuthContextType {
  user: UserType | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  createAccount: (
    name: string,
    email: string,
    password: string
  ) => Promise<void>
  forgetPassword: (email: string) => Promise<string | void>
  emailCadastrado: string
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  login: async () => {},
  createAccount: async () => {},
  forgetPassword: async () => {},
  emailCadastrado: ''
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null)
  const [emailCadastrado, setEmailCadastrado] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async currentUser => {
      if (currentUser) {
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

  async function login(email: string, password: string) {
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
      }
    } catch (error: any) {
      const message =
        firebaseErrorMessages[error.code] ||
        'Erro ao fazer login. Verifique seus dados.'
      Alert.alert('Erro no login', message)
      console.log('Erro Firebase login:', error.code)
    }
  }

  async function createAccount(name: string, email: string, password: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      const user = userCredential.user
      await set(ref(db, 'users/' + user.uid), { name, email })
      Alert.alert('Sucesso', 'Conta criada com sucesso!')
    } catch (error: any) {
      const message =
        firebaseErrorMessages[error.code] ||
        'Erro ao criar conta. Tente novamente.'
      Alert.alert('Erro no cadastro', message)
      console.log('Erro Firebase cadastro:', error.code)
    }
  }

  async function forgetPassword(email: string) {
    try {
      // Tenta enviar o e-mail de redefinição
      await sendPasswordResetEmail(auth, email)
      .then(() => {
        // Mensagem genérica
        Alert.alert(
          'Verifique seu e-mail',
          'Se o e-mail estiver cadastrado, você receberá um link para redefinir sua senha.'
        )
        
      })


      setEmailCadastrado(email)
    } catch (error: any) {
      const errorMessage =
        firebaseErrorMessages[error.code] ||
        'Erro ao enviar o e-mail. Verifique seus dados.'
      Alert.alert('Erro', errorMessage)
      console.log('Erro Firebase forgetPassword:', error.code)
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, loading, login, createAccount, forgetPassword, emailCadastrado }}
    >
      {children}
    </AuthContext.Provider>
  )
}
