import React from 'react';

import './_hydration';

import {
  AuthStore,
  TokenType,
  AuthStatus,
} from './auth-store';

import { TransactionStore } from './transaction-store';
import { UIThemeStore } from './ui-theme-store';
import { IStore, PVoid } from './types';

// Re-export types
export type { TokenType, AuthStatus };

class Stores {
  auth = new AuthStore();
  uiTheme = new UIThemeStore();
  transactions = new TransactionStore();
}

export const stores = new Stores();

const storeContext = React.createContext<Stores>(stores);

export const StoresProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <storeContext.Provider value={stores}>
    {children}
  </storeContext.Provider>
);

export const useStores = (): Stores =>
  React.useContext(storeContext);

export const hydrateStores = async (): PVoid => {
  for (const key in stores) {
    if (
      Object.prototype.hasOwnProperty.call(stores, key)
    ) {
      const store = (stores as any)[key] as IStore;

      if (store.hydrate) {
        await store.hydrate();
      }
    }
  }
};