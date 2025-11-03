import background from '@/src/assets/images/background-inicial.png'
import logo from '@/src/assets/images/etzinho.png'
import { AuthContext } from '@/src/contexts/AuthContext'
import { styles } from '@/src/styles/login.styles'
import { MaterialIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { useContext, useState } from 'react'
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'


export default function LoginScreen() {
  const { login, emailCadastrado } = useContext(AuthContext)
  const router = useRouter()


  const [email, setEmail] = useState( emailCadastrado || '')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  async function handleLogin() {
    await login(email, password)
  }

  function goToCreateAccount() {
    router.push('/(auth)/createAccount')
  }

  return (
    <ImageBackground
      source={background}
      style={styles.background}
      resizeMode='cover'
    >
      <View style={styles.overlay} />
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} resizeMode='contain' />

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
            onChangeText={setPassword}
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

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>ENTRAR</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/(auth)/forgetPassword')}>
          <Text style={styles.forgotText}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>OU</Text>
          <View style={styles.line} />
        </View>

        <TouchableOpacity
          style={styles.createAccountButton}
          onPress={goToCreateAccount}
        >
          <MaterialIcons
            name='account-circle'
            size={20}
            color='#fff'
            style={{ marginRight: 8 }}
          />
          <Text style={styles.createAccountText}>CRIAR CONTA</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}
