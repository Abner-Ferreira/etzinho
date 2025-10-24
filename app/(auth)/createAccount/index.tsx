import logo from '@/src/assets/images/logo.png'
import { AuthContext } from '@/src/contexts/AuthContext'
import { styles } from '@/src/styles/createAccount.styles'
import React, { useContext, useState } from 'react'
import {
  Alert,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router'

export default function CreateAccount() {
  const { createAccount } = useContext(AuthContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false)

  const [isPasswordValid, setIsPasswordValid] = useState(false)
  const [isConfirmationValid, setIsConfirmationValid] = useState(false)

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

  const validatePassword = (value: string) => {
    setPassword(value)
    setIsPasswordValid(passwordRegex.test(value))
    setIsConfirmationValid(value === passwordConfirmation)
  }

  const validateConfirmation = (value: string) => {
    setPasswordConfirmation(value)
    setIsConfirmationValid(value === password)
  }

  async function handleCreateAccount() {
    if (!isPasswordValid) {
      Alert.alert(
        'Senha inválida',
        'A senha deve conter no mínimo 8 caracteres, 1 letra maiúscula, 1 letra minúscula, 1 número e 1 símbolo especial.'
      )
      return
    }

    if (!isConfirmationValid) {
      Alert.alert('Erro', 'As senhas não coincidem!')
      return
    }

    try {
      await createAccount(name, email, password)
      Alert.alert('Conta criada!', `Bem-vindo ${email}`)
    } catch (error: any) {
      Alert.alert('Erro ao criar conta', error.message)
    }
  }

  function handleBack() {
    router.back()
  }

  const renderPasswordValidation = (pass: string) => (
    <View style={{ marginBottom: 10 }}>
      <Text style={{ color: pass.length >= 8 ? 'lightgreen' : 'red' }}>
        • Mínimo de 8 caracteres
      </Text>
      <Text style={{ color: /[A-Z]/.test(pass) ? 'lightgreen' : 'red' }}>
        • 1 letra maiúscula
      </Text>
      <Text style={{ color: /[a-z]/.test(pass) ? 'lightgreen' : 'red' }}>
        • 1 letra minúscula
      </Text>
      <Text style={{ color: /\d/.test(pass) ? 'lightgreen' : 'red' }}>
        • 1 número
      </Text>
      <Text style={{ color: /[@$!%*?&]/.test(pass) ? 'lightgreen' : 'red' }}>
        • 1 caractere especial (@$!%*?&)
      </Text>
    </View>
  )

  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1170&q=80',
      }}
      style={styles.background}
      resizeMode='cover'
    >
      <View style={styles.overlay} />

      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <MaterialIcons name='arrow-back' size={28} color='#fff' />
      </TouchableOpacity>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', padding: 20 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            <Image source={logo} style={styles.logo} resizeMode='contain' />

            <Text style={styles.label}>NOME COMPLETO</Text>
            <TextInput
              style={styles.input}
              placeholder='Etzinho da Silva'
              placeholderTextColor='#ddd'
              keyboardType='default'
              autoCapitalize='none'
              value={name}
              onChangeText={setName}
            />

            <Text style={styles.label}>E-MAIL</Text>
            <TextInput
              style={styles.input}
              placeholder='next2025@fiap.com.br'
              placeholderTextColor='#ddd'
              keyboardType='email-address'
              autoCapitalize='none'
              value={email}
              onChangeText={setEmail}
            />

            <Text style={styles.label}>SENHA</Text>
            <View style={{ position: 'relative', width: '100%' }}>
              <TextInput
                style={[styles.input, { paddingRight: 40 }]}
                placeholder='********'
                placeholderTextColor='#ddd'
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={validatePassword}
              />
              <TouchableOpacity
                style={{ position: 'absolute', right: 10, top: 12 }}
                onPress={() => setShowPassword(!showPassword)}
              >
                <MaterialIcons
                  name={showPassword ? 'visibility' : 'visibility-off'}
                  size={24}
                  color='#fff'
                />
              </TouchableOpacity>
            </View>
            {password.length > 0 && renderPasswordValidation(password)}

            <Text style={styles.label}>CONFIRME A SUA SENHA</Text>
            <View style={{ position: 'relative', width: '100%' }}>
              <TextInput
                style={[styles.input, { paddingRight: 40 }]}
                placeholder='********'
                placeholderTextColor='#ddd'
                secureTextEntry={!showPasswordConfirmation}
                value={passwordConfirmation}
                onChangeText={validateConfirmation}
              />
              <TouchableOpacity
                style={{ position: 'absolute', right: 10, top: 12 }}
                onPress={() => setShowPasswordConfirmation(!showPasswordConfirmation)}
              >
                <MaterialIcons
                  name={showPasswordConfirmation ? 'visibility' : 'visibility-off'}
                  size={24}
                  color='#fff'
                />
              </TouchableOpacity>
            </View>
            {passwordConfirmation.length > 0 && renderPasswordValidation(passwordConfirmation)}

            <TouchableOpacity
              style={[styles.loginButton, !isPasswordValid && { opacity: 0.5 }]}
              disabled={!isPasswordValid}
              onPress={handleCreateAccount}
            >
              <Text style={styles.loginButtonText}>CRIAR CONTA</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}
