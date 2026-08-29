import { Platform } from 'react-native';
import { configurePersistable } from 'mobx-persist-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const webStorage = {
  setItem: async (key: string, value: string) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, value);
    }
  },

  getItem: async (key: string) => {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem(key);
    }

    return null;
  },

  removeItem: async (key: string) => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(key);
    }
  },
};

const nativeStorage = {
  setItem: async (key: string, value: string) => {
    await AsyncStorage.setItem(key, value);
  },

  getItem: async (key: string) => {
    return await AsyncStorage.getItem(key);
  },

  removeItem: async (key: string) => {
    await AsyncStorage.removeItem(key);
  },
};

configurePersistable({
  debugMode: __DEV__,
  storage: Platform.OS === 'web' ? webStorage : nativeStorage,
});