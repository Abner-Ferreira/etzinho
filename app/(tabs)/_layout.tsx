import { Tabs } from 'expo-router'
import React from 'react'

// import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol'

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
          title: 'Meditação',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name='figure.yoga' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='receitas/index'
        options={{
          title: 'Receitas',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name='book' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='entretenimento/index'
        options={{
          title: 'Entretenimento',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name='movieclapper' color={color} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="conhecimento/index"
        options={{
          title: 'Conhecimento',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="graduationcap" color={color} />,
        }}
      />
    </Tabs>
  )
}
