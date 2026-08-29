import React from 'react';
import {
  Alert,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';

import { FocusAwareStatusBar } from '@/components/ui';

export default function Settings() {
  const showComingSoon = () => {
    Alert.alert(
      'Coming soon',
      'This option can be added in a future version.'
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <FocusAwareStatusBar />

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingTop: 60,
          paddingBottom: 40,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: '700',
            color: '#000000',
          }}
        >
          Settings
        </Text>

        <Text
          style={{
            marginTop: 8,
            marginBottom: 30,
            color: '#6B7280',
            fontSize: 16,
          }}
        >
          Manage app preferences
        </Text>

        {/* General */}
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            marginBottom: 12,
          }}
        >
          General
        </Text>

        <View
          style={{
            backgroundColor: '#F9FAFB',
            borderRadius: 16,
            overflow: 'hidden',
          }}
        >
          <Pressable
            onPress={showComingSoon}
            style={{
              padding: 18,
              borderBottomWidth: 1,
              borderBottomColor: '#E5E7EB',
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
              }}
            >
              Currency
            </Text>

            <Text
              style={{
                marginTop: 4,
                color: '#6B7280',
              }}
            >
              Maldivian Rufiyaa (MVR)
            </Text>
          </Pressable>

          <Pressable
            onPress={showComingSoon}
            style={{
              padding: 18,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
              }}
            >
              Appearance
            </Text>

            <Text
              style={{
                marginTop: 4,
                color: '#6B7280',
              }}
            >
              Light Mode
            </Text>
          </Pressable>
        </View>

        {/* About */}
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            marginBottom: 12,
            marginTop: 30,
          }}
        >
          About
        </Text>

        <View
          style={{
            backgroundColor: '#F9FAFB',
            borderRadius: 16,
            overflow: 'hidden',
          }}
        >
          <View
            style={{
              padding: 18,
              borderBottomWidth: 1,
              borderBottomColor: '#E5E7EB',
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
              }}
            >
              Spend!
            </Text>

            <Text
              style={{
                marginTop: 4,
                color: '#6B7280',
              }}
            >
              A simple personal spending tracker
            </Text>
          </View>

          <View
            style={{
              padding: 18,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
              }}
            >
              Version
            </Text>

            <Text
              style={{
                marginTop: 4,
                color: '#6B7280',
              }}
            >
              1.0.0
            </Text>
          </View>
        </View>

        {/* Future Improvements */}
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            marginBottom: 12,
            marginTop: 30,
          }}
        >
          Future Improvements
        </Text>

        <View
          style={{
            backgroundColor: '#F9FAFB',
            borderRadius: 16,
            padding: 18,
          }}
        >
          <Text style={{ color: '#4B5563', lineHeight: 24 }}>
            • Custom spending categories{'\n'}
            • Monthly budgets{'\n'}
            • Dark mode{'\n'}
            • Detailed spending statistics
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}