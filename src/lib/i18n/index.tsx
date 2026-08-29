import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18nManager } from 'react-native';

import { resources } from './resources';

export type { TxKeyPath } from './types';

// English only
i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  compatibilityJSON: 'v4',
  interpolation: {
    escapeValue: false,
  },
});

// Disable RTL because the app is English only
I18nManager.allowRTL(false);
I18nManager.forceRTL(false);

export const translate = (
  key: string,
  options?: any
): string => {
  return i18n.t(key, options) as string;
};

export default i18n;