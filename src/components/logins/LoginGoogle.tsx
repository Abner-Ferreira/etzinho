import * as Google from 'expo-auth-session/providers/google'
import * as WebBrowser from 'expo-web-browser'
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth'
import { auth } from '@/src/services/firebaseConfig'
import { useEffect } from 'react'
import { Button } from 'react-native'

WebBrowser.maybeCompleteAuthSession()

export function LoginGoogle() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: 'SEU_ANDROID_CLIENT_ID.apps.googleusercontent.com',
    iosClientId: 'SEU_IOS_CLIENT_ID.apps.googleusercontent.com',
  })

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params
      const credential = GoogleAuthProvider.credential(id_token)
      signInWithCredential(auth, credential)
    }
  }, [response])

  return <Button title='Entrar com Google' onPress={() => promptAsync()} />
}
