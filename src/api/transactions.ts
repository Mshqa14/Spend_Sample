export type Transaction = {
  id: string;
  name: string;
  category: string;
  date: string;
  amount: number;
};

export const transactions: Transaction[] = [
  {
    id: '1',
    name: 'Grocery Store',
    category: 'Food & Groceries',
    date: 'Today',
    amount: -45.2,
  },
  {
    id: '2',
    name: 'Salary',
    category: 'Income',
    date: 'Yesterday',
    amount: 2500,
  },
  {
    id: '3',
    name: 'Netflix',
    category: 'Entertainment',
    date: 'Yesterday',
    amount: -15.99,
  },
  {
    id: '4',
    name: 'Uber',
    category: 'Transport',
    date: 'Aug 14',
    amount: -18.5,
  },
  {
    id: '5',
    name: 'Coffee Shop',
    category: 'Food & Groceries',
    date: 'Aug 13',
    amount: -6.75,
  },
  {
    id: '6',
    name: 'Freelance Payment',
    category: 'Income',
    date: 'Aug 12',
    amount: 850,
  },
];