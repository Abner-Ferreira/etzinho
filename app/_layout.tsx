import { AuthProvider, AuthContext } from '@/src/contexts/AuthContext'
import { Stack, useRouter } from 'expo-router'
import React, { useContext, useEffect } from 'react'
import Splash from '@/src/components/splash'
import { StatusBar, Platform } from 'react-native'
import { useFonts, Inter_700Bold, Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter'
import Toast from 'react-native-toast-message'
import { toastConfig } from '@/src/components/customToast'

function RootNavigator() {
  const { user, loading } = useContext(AuthContext)
  const router = useRouter()

  useEffect(() => {
    if (!loading) {
      const timeout = setTimeout(() => {
        if (user) {
          router.replace('/(tabs)')
        } else {
          router.replace('/(auth)/login')
        }
      }, Platform.OS === 'web' ? 100 : 0)

      return () => clearTimeout(timeout)
    }
  }, [user, loading])

  if (loading) {
    return <Splash />
  }

  return <Stack screenOptions={{ headerShown: false }} />
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_400Regular
  })

  if (!fontsLoaded) {
    return <Splash />
  }

  return (
    <AuthProvider>
      <StatusBar barStyle="dark-content" />
      <RootNavigator />
      <Toast config={toastConfig}/>
    </AuthProvider>
  )
}
