import background from '@/src/assets/images/background-inicial-2.png'
import logo from '@/src/assets/images/etzinho.png'
import SpaceLoading from '@/src/components/spaceLoading'
import { AuthContext } from '@/src/contexts/AuthContext'
import { styles } from '@/src/styles/createAccount.styles'
import { MaterialIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { useContext, useState } from 'react'
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

export default function ForgetPassword() {
  const { forgetPassword, authLoading } = useContext(AuthContext)
  const [email, setEmail] = useState('')

  function handleBack() {
    router.back()
  }

  async function handleResetPassword() {
    if (!email.trim()) {
      Alert.alert('Atenção', 'Por favor, digite o seu e-mail.')
      return
    }

    try {
      await forgetPassword(email)
    } catch (error: any) {
      Alert.alert('Erro', error.message || 'Não foi possível enviar o e-mail.')
    }
  }

  return (
    <ImageBackground
      source={background}
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
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            padding: 20,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            <Image source={logo} style={styles.logo} resizeMode='contain' />

            <Text
              style={[styles.label, { textAlign: 'center', marginBottom: 10 }]}
            >
              ESQUECEU SUA SENHA?
            </Text>
            <Text
              style={{ color: '#fff', textAlign: 'center', marginBottom: 20 }}
            >
              Digite o e-mail cadastrado. Enviaremos um link para redefinir sua
              senha.
            </Text>

            <Text style={styles.label}>E-MAIL</Text>
            <TextInput
              style={styles.input}
              placeholder='seu-email@gmail.com'
              placeholderTextColor='#ddd'
              keyboardType='email-address'
              autoCapitalize='sentences'
              value={email}
              onChangeText={setEmail}
            />

            <TouchableOpacity
              style={[styles.loginButton, { marginTop: 30 }]}
              onPress={handleResetPassword}
            >
              {authLoading ? (
                <SpaceLoading />
              ) : (
                <Text style={styles.loginButtonText}>ENVIAR LINK</Text>
              )}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}
