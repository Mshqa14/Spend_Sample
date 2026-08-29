import React from 'react';
import { useRouter } from 'expo-router';
import { observer } from 'mobx-react-lite';
import { Pressable } from 'react-native';

import {
  FocusAwareStatusBar,
  ScrollView,
  Text,
  View,
} from '@/components/ui';

import { useStores } from '@/stores';

function Transactions() {
  const router = useRouter();

  const { transactions: transactionStore } = useStores();

  const {
    transactions,
    income,
    expenses,
  } = transactionStore;

  return (
    <View className="flex-1 bg-white">
      <FocusAwareStatusBar />

      <ScrollView
        className="flex-1"
        contentContainerClassName="px-5 pb-8"
      >
        
        <View className="mb-6 mt-6">
          <Text className="text-3xl font-bold text-[#365F61]">
            Transactions
          </Text>

          <Text className="mt-1 text-gray-500">
            Keep track of your spending
          </Text>
        </View>

        {/* income and spent */}
        <View className="mb-6 flex-row gap-3">
          <View className="flex-1 rounded-2xl bg-gray-50 p-4">
            <Text className="text-sm text-gray-500">
              Income
            </Text>

            <Text className="mt-2 text-xl font-bold text-green-600">
              MVR {income.toFixed(2)}
            </Text>
          </View>

          <View className="flex-1 rounded-2xl bg-gray-50 p-4">
            <Text className="text-sm text-gray-500">
              Spent
            </Text>

            <Text className="mt-2 text-xl font-bold text-red-500">
              MVR {expenses.toFixed(2)}
            </Text>
          </View>
        </View>

        {/* Add Transaction */}
        <Pressable
          style={{
            marginBottom: 28,
            alignItems: 'center',
            backgroundColor: '#5f9ea0',
            paddingVertical: 17,
            borderRadius: 16,
          }}
          onPress={() =>
            router.push('/(app)/add-transaction')
          }
        >
          <Text className="font-semibold text-white">
            + Add Transaction
          </Text>
        </Pressable>

        {/*       Transactions */}
        <View>
          <Text className="mb-4 text-xl font-bold text-black">
            All Transactions
          </Text>

          {transactions.length === 0 && (
            <View className="rounded-2xl bg-gray-50 p-6">
              <Text className="text-center text-gray-500">
                No transactions yet
              </Text>

              <Text className="mt-1 text-center text-sm text-gray-400">
                Add a transaction to begin tracking your spending
              </Text>
            </View>
          )}

          {transactions.map((transaction) => {
            const isIncome = transaction.amount > 0;

            return (
              <View
                key={transaction.id}
                className="mb-3 flex-row items-center rounded-2xl border border-gray-100 bg-white p-4"
              >
                {/* bottom row icon */}
              <View className="mr-4 h-12 w-12 items-center justify-center rounded-full bg-[#365F61]">
                <Text className="text-2xl font-bold text-white">
                  {isIncome ? '↑' : '↓'}
                </Text>
              </View>

                {/* Details */}
                <View className="flex-1">
                  <Text className="font-semibold text-black">
                    {transaction.name}
                  </Text>

                  <Text className="mt-1 text-sm text-gray-500">
                    {transaction.category}
                  </Text>

                  <Text className="mt-1 text-xs text-gray-400">
                    {transaction.date}
                  </Text>
                </View>

                {/* Amount */}
                <Text
                  className={`font-bold ${
                    isIncome
                      ? 'text-green-600'
                      : 'text-red-500'
                  }`}
                >
                  {isIncome ? '+' : '-'}
                  MVR {Math.abs(transaction.amount).toFixed(2)}
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

export default observer(Transactions);