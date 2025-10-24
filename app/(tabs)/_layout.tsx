import { Tabs } from 'expo-router'
import React from 'react'

// import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/src/components/ui/icon-symbol'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#1ab394',
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Início',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name='house.fill' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='meditacao/index'
        options={{
          title: 'Fitness',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name='dumbbell.fill' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='receitas/index'
        options={{
          title: 'Receitas',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name='fork.knife' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='entretenimento/index'
        options={{
          title: 'Lazer',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name='book.fill' color={color} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="conhecimento/index"
        options={{
          title: 'Saúde',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="brain.head.profile" color={color} />,
        }}
      />
    </Tabs>
  )
}
