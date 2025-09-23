import Splash from '@/components/splash';
import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useState, useEffect, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const unstable_settings = { anchor: '(tabs)' };

export default function RootLayout() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });
  const [ready, setReady] = useState(false);
  const splashDuration = 3000;

  // Mantém a splash e gerencia tempo e carregamento
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
      if (fontsLoaded) {
        setTimeout(() => setReady(true), splashDuration);
      }
    }
    prepare();
  }, [fontsLoaded]);

  const onLayoutRootView = useCallback(async () => {
    if (ready && fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [ready, fontsLoaded]);

  if (!fontsLoaded || !ready) return <Splash />;

  return (
    <SafeAreaView
      style={styles.container}
      edges={['top', 'left', 'right']}
      onLayout={onLayoutRootView}
    >
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'transparent' },
});
