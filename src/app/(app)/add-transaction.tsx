import React, { useState } from 'react';
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useStores } from '@/stores';


export default function AddTransaction() {
  const router = useRouter();
  const { transactions } = useStores();
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState<'expense' | 'income'>('expense');
  const handleSave = () => {
    const numericAmount = Number(amount);

    if (!name.trim()) {
      Alert.alert('Missing information', 'Please enter a transaction name.');
      return;
    }

    if (!amount || Number.isNaN(numericAmount) || numericAmount <= 0) {
      Alert.alert('Invalid amount', 'Please enter a valid amount.');
      return;
    }

    if (!category.trim()) {
      Alert.alert('Missing information', 'Please enter a category.');
      return;
    }

    transactions.addTransaction({
      id: Date.now().toString(),
      name: name.trim(),
      category: category.trim(),
      date: new Date().toLocaleDateString(),
      amount: type === 'expense' ? -numericAmount : numericAmount,
    });

    Alert.alert('Saved', 'Transaction added successfully.', [
      {
        text: 'OK',
        onPress: () => router.replace('/(app)'),
      },
    ]);
  };




  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Add Transaction</Text>

        <Text style={styles.subtitle}>
          Record your income or spending
        </Text>

        <Text style={styles.label}>Type</Text>

        <View style={styles.typeRow}>
          <Pressable
            style={[
              styles.typeButton,
              type === 'expense' && styles.typeButtonSelected,
            ]}
            onPress={() => setType('expense')}
          >
            <Text
              style={[
                styles.typeText,
                type === 'expense' && styles.typeTextSelected,
              ]}
            >
              Expense
            </Text>
          </Pressable>

          <Pressable
            style={[
              styles.typeButton,
              type === 'income' && styles.typeButtonSelected,
            ]}
            onPress={() => setType('income')}
          >
            <Text
              style={[
                styles.typeText,
                type === 'income' && styles.typeTextSelected,
              ]}
            >
              Income
            </Text>
          </Pressable>
        </View>

        <Text style={styles.label}>Name</Text>

        <TextInput
          style={styles.input}
          placeholder="e.g. Lunch"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Amount</Text>

        <TextInput
          style={styles.input}
          placeholder="e.g. 150"
          keyboardType="decimal-pad"
          value={amount}
          onChangeText={setAmount}
        />

        <Text style={styles.label}>Category</Text>

        <TextInput
          style={styles.input}
          placeholder="e.g. Food"
          value={category}
          onChangeText={setCategory}
        />

        <Pressable style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveText}>Save Transaction</Text>
        </Pressable>

        <Pressable
          style={styles.cancelButton}
          onPress={() => router.back()}
        >
          <Text style={styles.cancelText}>Cancel</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}



//------------------style stuff
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  content: {
    padding: 24,
    paddingBottom: 60,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#111111',
  },

  subtitle: {
    marginTop: 8,
    marginBottom: 28,
    fontSize: 16,
    color: '#6b7280',
  },

  label: {
    marginTop: 20,
    marginBottom: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#111111',
  },

  typeRow: {
    flexDirection: 'row',
    gap: 12,
  },

  typeButton: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 12,
    backgroundColor: '#f3f4f6',
  },

  typeButtonSelected: {
    backgroundColor: '#365F61',
  },

  typeText: {
    textAlign: 'center',
    fontWeight: '600',
    color: '#111111',
  },

  typeTextSelected: {
    color: '#ffffff',
  },

  input: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#f3f4f6',
    fontSize: 16,
    color: '#111111',
  },

  saveButton: {
    marginTop: 32,
    paddingVertical: 16,
    borderRadius: 12,
    backgroundColor: '#5f9ea0',
  },

  saveText: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 16,
  },

  cancelButton: {
    marginTop: 12,
    paddingVertical: 14,
  },

  cancelText: {
    textAlign: 'center',
    color: '#6b7280',
    fontWeight: '600',
  },
});