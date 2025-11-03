import { AuthProvider, AuthContext } from '@/src/contexts/AuthContext'
import { Stack, useRouter } from 'expo-router'
import React, { useContext, useEffect } from 'react'
import Splash from '@/src/components/splash'
import { StatusBar } from 'react-native'

function RootNavigator() {
  const { user, loading } = useContext(AuthContext)
  const router = useRouter()

  useEffect(() => {
    if (!loading) {
      if (user) {
        router.replace('/(tabs)')
      } else {
        router.replace('/(auth)/login')
      }
    }
  }, [user, loading])

  if (loading) {
    return <Splash />
  }

  return <Stack screenOptions={{ headerShown: false }} />
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <StatusBar barStyle='dark-content' />
      <RootNavigator />
    </AuthProvider>
  )
}
