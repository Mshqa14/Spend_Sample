import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import type { Transaction } from '../../../api/transactions';

type TransactionContextType = {
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
  deleteTransaction: (id: string) => void;
  income: number;
  expenses: number;
  balance: number;
};

const TransactionContext =
  createContext<TransactionContextType | undefined>(undefined);

export function TransactionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // Load saved transactions when app opens
  useEffect(() => {
    loadTransactions();
  }, []);

  // Save whenever transactions change
  useEffect(() => {
    saveTransactions();
  }, [transactions]);

  const loadTransactions = async () => {
    try {
      const savedTransactions =
        await AsyncStorage.getItem('transactions');

      if (savedTransactions) {
        setTransactions(JSON.parse(savedTransactions));
      }
    } catch (error) {
      console.log('Error loading transactions:', error);
    }
  };

  const saveTransactions = async () => {
    try {
      await AsyncStorage.setItem(
        'transactions',
        JSON.stringify(transactions)
      );
    } catch (error) {
      console.log('Error saving transactions:', error);
    }
  };

  const addTransaction = (transaction: Transaction) => {
    setTransactions((current) => [
      transaction,
      ...current,
    ]);
  };

  const deleteTransaction = (id: string) => {
    setTransactions((current) =>
      current.filter(
        (transaction) => transaction.id !== id
      )
    );
  };

  const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce(
      (total, transaction) =>
        total + transaction.amount,
      0
    );

  const expenses = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce(
      (total, transaction) =>
        total + Math.abs(transaction.amount),
      0
    );

  const balance = income - expenses;

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        addTransaction,
        deleteTransaction,
        income,
        expenses,
        balance,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionContext);

  if (!context) {
    throw new Error(
      'useTransactions must be used inside TransactionProvider'
    );
  }

  return context;
}
