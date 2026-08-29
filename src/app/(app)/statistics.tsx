import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { observer } from 'mobx-react-lite';

import { useStores } from '@/stores';

function StatisticsScreen() {
  const { transactions: transactionStore } = useStores();

  const {
    transactions,
    income,
    expenses,
    balance,
  } = transactionStore;

  const categoryTotals: Record<string, number> = {};

  transactions
    .filter((transaction) => transaction.amount < 0)
    .forEach((transaction) => {
      const category = transaction.category || 'Other';

      if (!categoryTotals[category]) {
        categoryTotals[category] = 0;
      }

      categoryTotals[category] += Math.abs(transaction.amount);
    });

  const categories = Object.entries(categoryTotals).sort(
    (a, b) => b[1] - a[1]
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Statistics</Text>

        <Text style={styles.subtitle}>
          Track where your money is going
        </Text>

        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>
            Current Balance
          </Text>

          <Text style={styles.balanceAmount}>
            MVR {balance.toFixed(2)}
          </Text>
        </View>

        <View style={styles.row}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>
              Income
            </Text>

            <Text style={styles.income}>
              MVR {income.toFixed(2)}
            </Text>
          </View>

          <View style={styles.summaryCard}>
            <Text style={styles.summaryLabel}>
              Expenses
            </Text>

            <Text style={styles.expenses}>
              MVR {expenses.toFixed(2)}
            </Text>
          </View>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>
            Total Transactions
          </Text>

          <Text style={styles.transactionCount}>
            {transactions.length}
          </Text>
        </View>

        <Text style={styles.sectionTitle}>
          Spending by Category
        </Text>

        {categories.length === 0 ? (
          <View style={styles.emptyCard}>
            <Text style={styles.emptyText}>
              No spending data yet.
            </Text>
          </View>
        ) : (
          categories.map(([category, amount]) => {
            const percentage =
              expenses > 0
                ? (amount / expenses) * 100
                : 0;

            return (
              <View
                key={category}
                style={styles.categoryCard}
              >
                <View style={styles.categoryRow}>
                  <Text style={styles.categoryName}>
                    {category}
                  </Text>

                  <Text style={styles.categoryAmount}>
                    MVR {amount.toFixed(2)}
                  </Text>
                </View>

                <Text style={styles.percentage}>
                  {percentage.toFixed(0)}% of total spending
                </Text>
              </View>
            );
          })
        )}
      </ScrollView>
    </View>
  );
}

export default observer(StatisticsScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  content: {
    padding: 20,
    paddingBottom: 50,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#365F61',
    marginTop: 10,
  },

  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    marginTop: 6,
    marginBottom: 24,
  },

  balanceCard: {
    backgroundColor: '#365F61',
    borderRadius: 20,
    padding: 22,
    marginBottom: 16,
  },

  balanceLabel: {
    color: '#d1d5db',
    fontSize: 14,
  },

  balanceAmount: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: '700',
    marginTop: 8,
  },

  row: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },

  summaryCard: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    borderRadius: 16,
    padding: 18,
    marginBottom: 12,
  },

  summaryLabel: {
    color: '#6b7280',
    fontSize: 14,
  },

  income: {
    marginTop: 8,
    color: '#16a34a',
    fontSize: 18,
    fontWeight: '700',
  },

  expenses: {
    marginTop: 8,
    color: '#dc2626',
    fontSize: 18,
    fontWeight: '700',
  },

  transactionCount: {
    marginTop: 8,
    color: '#111111',
    fontSize: 24,
    fontWeight: '700',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111111',
    marginTop: 10,
    marginBottom: 12,
  },

  emptyCard: {
    backgroundColor: '#f3f4f6',
    borderRadius: 16,
    padding: 20,
  },

  emptyText: {
    color: '#6b7280',
    textAlign: 'center',
  },

  categoryCard: {
    backgroundColor: '#f9fafb',
    borderRadius: 16,
    padding: 18,
    marginBottom: 10,
  },

  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  categoryName: {
    color: '#111111',
    fontSize: 16,
    fontWeight: '600',
  },

  categoryAmount: {
    color: '#111111',
    fontSize: 16,
    fontWeight: '700',
  },

  percentage: {
    marginTop: 6,
    color: '#9ca3af',
    fontSize: 13,
  },
});