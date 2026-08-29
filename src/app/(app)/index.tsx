import React from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';
import { observer } from 'mobx-react-lite';
import { useStores } from '@/stores';

function Home() {
  const router = useRouter();
  const { transactions: transactionStore } = useStores();
  const {
    transactions,
    income,
    expenses,
    balance,
  } = transactionStore;



  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Spend!</Text>

        <Text style={styles.subtitle}>
         A simple way to manage your money ˙ᵕ˙
        </Text>

        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>
            Total Balance
          </Text>

          <Text style={styles.balance}>
            MVR {balance.toFixed(2)}
          </Text>

          <View style={styles.summaryRow}>
            <View>
              <Text style={styles.summaryLabel}>
                Income
              </Text>

              <Text style={styles.income}>
                +MVR {income.toFixed(2)}
              </Text>
            </View>

            <View>
              <Text style={styles.summaryLabel}>
                Expenses
              </Text>

              <Text style={styles.expenses}>
                -MVR {expenses.toFixed(2)}
              </Text>
            </View>
          </View>
        </View>

        <Pressable
          style={styles.addButton}
          onPress={() =>
            router.push('/(app)/add-transaction')
          }
        >
          <Text style={styles.addButtonText}>
            + Add Transaction
          </Text>
        </Pressable>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Recent Transactions
          </Text>

          <Pressable
            onPress={() =>
              router.push('/(app)/transactions')
            }
          >
            <Text style={styles.seeAll}>
              See all
            </Text>
          </Pressable>
        </View>

        {transactions.length === 0 ? (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyText}>
              No transactions yet.
            </Text>

            <Text style={styles.emptySubtext}>
              Add your first transaction to get started.
            </Text>
          </View>
        ) : (
          transactions.slice(0, 5).map((transaction) => {
            const isIncome = transaction.amount > 0;

            return (
              <View
                key={transaction.id}
                style={styles.transactionCard}
              >
                <View style={styles.transactionInfo}>
                  <Text style={styles.transactionName}>
                    {transaction.name}
                  </Text>

                  <Text style={styles.transactionCategory}>
                    {transaction.category}
                  </Text>

                  <Text style={styles.transactionDate}>
                    {transaction.date}
                  </Text>
                </View>

                <Text
                  style={
                    isIncome
                      ? styles.positiveAmount
                      : styles.negativeAmount
                  }
                >
                  {isIncome ? '+' : '-'}MVR{' '}
                  {Math.abs(transaction.amount).toFixed(2)}
                </Text>
              </View>
            );
          })
        )}
      </ScrollView>
    </View>
  );
}
export default observer(Home);


//------------------style stuff
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 50,
  },

  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#365F61',
  },

  subtitle: {
    marginTop: 5,
    marginBottom: 24,
    color: '#6b7280',
    fontSize: 16,
  },

  balanceCard: {
    backgroundColor: '#365F61',
    borderRadius: 22,
    padding: 22,
  },

  balanceLabel: {
    color: '#d1d5db',
    fontSize: 14,
  },

  balance: {
    marginTop: 8,
    color: '#ffffff',
    fontSize: 32,
    fontWeight: '700',
  },

  summaryRow: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  summaryLabel: {
    color: '#9ca3af',
    fontSize: 14,
  },

  income: {
    marginTop: 5,
    color: '#22c55e',
    fontSize: 18,
    fontWeight: '600',
  },

  expenses: {
    marginTop: 5,
    color: '#ef4444',
    fontSize: 18,
    fontWeight: '600',
  },

  addButton: {
    marginTop: 20,
    backgroundColor: '#5f9ea0',
    borderRadius: 16,
    paddingVertical: 16,
  },

  addButtonText: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 16,
  },

  sectionHeader: {
    marginTop: 30,
    marginBottom: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111111',
  },

  seeAll: {
    color: '#2563eb',
    fontSize: 14,
  },

  emptyCard: {
    padding: 24,
    borderRadius: 16,
    backgroundColor: '#f3f4f6',
  },

  emptyText: {
    textAlign: 'center',
    color: '#4b5563',
    fontWeight: '600',
  },

  emptySubtext: {
    marginTop: 5,
    textAlign: 'center',
    color: '#9ca3af',
  },

  transactionCard: {
    marginBottom: 10,
    padding: 16,
    borderRadius: 16,
    backgroundColor: '#f9fafb',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  transactionInfo: {
    flex: 1,
    paddingRight: 12,
  },

  transactionName: {
    fontWeight: '600',
    fontSize: 16,
    color: '#111111',
  },

  transactionCategory: {
    marginTop: 4,
    color: '#6b7280',
    fontSize: 14,
  },

  transactionDate: {
    marginTop: 3,
    color: '#9ca3af',
    fontSize: 12,
  },

  positiveAmount: {
    color: '#16a34a',
    fontWeight: '700',
  },

  negativeAmount: {
    color: '#dc2626',
    fontWeight: '700',
  },
});