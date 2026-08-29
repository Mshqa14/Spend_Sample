import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

import type { Transaction } from '../api/transactions';

export class TransactionStore {
  transactions: Transaction[] = [];

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: 'TransactionStore',
      properties: ['transactions'],
    });
  }

  addTransaction(transaction: Transaction) {
    this.transactions.unshift(transaction);
  }

  deleteTransaction(id: string) {
    this.transactions = this.transactions.filter(
      (transaction) => transaction.id !== id
    );
  }

  get income() {
    return this.transactions
      .filter((transaction) => transaction.amount > 0)
      .reduce((total, transaction) => total + transaction.amount, 0);
  }

  get expenses() {
    return this.transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce(
        (total, transaction) => total + Math.abs(transaction.amount),
        0
      );
  }

  get balance() {
    return this.transactions.reduce(
      (total, transaction) => total + transaction.amount,
      0
    );
  }
}