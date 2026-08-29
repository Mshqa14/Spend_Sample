/* eslint-disable react/no-unstable-nested-components */

import React from 'react';
import { Redirect, Tabs } from 'expo-router';

import {
  Home as HomeIcon,
  Settings as SettingsIcon,
  Style as StatisticsIcon,
  Feed as TransactionsIcon,
} from '@/components/ui/icons';
import { useAuth } from '@/app/providers/auth/auth-provider';

export default function TabLayout() {
  const { status, isFirstTime } = useAuth();

  if (isFirstTime) {
    return <Redirect href="/(auth)/onboarding" />;
  }

  if (status === 'signOut') {
    return <Redirect href="/(auth)/login" />;
  }



  //------------------style stuff
  return (
    <Tabs
      screenOptions={{
        headerTitleAlign: 'center',
        tabBarActiveTintColor: '#5f9ea0',
        tabBarInactiveTintColor: '#9ca3af',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerTitle: 'Spend',
          tabBarIcon: ({ color }) => (
            <HomeIcon color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="transactions"
        options={{
          title: 'Transactions',
          headerTitle: 'Transactions',
          tabBarIcon: ({ color }) => (
            <TransactionsIcon color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="statistics"
        options={{
          title: 'Statistics',
          headerTitle: 'Statistics',
          tabBarIcon: ({ color }) => (
            <StatisticsIcon color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <SettingsIcon color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="add-transaction"
        options={{
          href: null,
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="style"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}