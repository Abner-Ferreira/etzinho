import Cards from '@/src/components/card'
import SugestaoDiariaCard from '@/src/components/cardSugestao/cardSugestao'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import { ScrollView, Text } from 'react-native'
import { styles } from './estilizacao.styles'

export default function Home() {

  return (
    <LinearGradient colors={['#ffffff', '#d9f2ef']} style={styles.gradient}>
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        style={styles.container}
        nestedScrollEnabled
      >
        <Text style={styles.titulo}>Olá Kléber</Text>
        <Text style={styles.subtitulo}>Você está no caminho certo 🌱</Text>

        {/* Rolagem horizontal com navegação */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScroll}
        >
          <Cards />
        </ScrollView>

       
        <SugestaoDiariaCard />
        <Text style={styles.textoMotivacao}>Você pode fazer isso! 💪</Text>
      </ScrollView>
    </LinearGradient>
  )
}
