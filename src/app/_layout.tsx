import '../../global.css';

import { Stack, SplashScreen } from 'expo-router';
import { useEffect, useState } from 'react';

import { hydrateStores } from '@/stores';
import { Providers } from './providers';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        await hydrateStores();
      } catch (error) {
        console.error('Failed to hydrate stores:', error);
      } finally {
        setIsHydrated(true);
      }
    };

    initializeApp();
  }, []);

  useEffect(() => {
    if (isHydrated) {
      SplashScreen.hideAsync();
    }
  }, [isHydrated]);

  if (!isHydrated) {
    return null;
  }

  return (
    <Providers>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(app)" />
        <Stack.Screen name="(auth)/login" />
        <Stack.Screen name="(auth)/onboarding" />
        <Stack.Screen name="feed/[id]" />
        <Stack.Screen name="feed/add-post" />
      </Stack>
    </Providers>
  );
}