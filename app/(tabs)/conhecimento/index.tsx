import { ConhecimentoCards } from '@/src/components/cardConhecimento'
import { styles } from '@/src/styles/conhecimento.styles'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

export default function Conhecimento() {
  const [selectedFilter, setSelectedFilter] = useState('Todos')

  const filtros = [
    'Todos',
    'Ansiedade',
    'Depressão',
    'Síndrome do Pânico',
    'TOC',
    'Transtorno Bipolar',
  ]

  return (
    <LinearGradient colors={['#d4f1e6', '#e9f9f5']} style={styles.gradient}>
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        style={styles.container}
        nestedScrollEnabled
      >
        <View style={styles.header}>
          <Text style={styles.titulo}>Guia de bem-estar</Text>
          <Text style={styles.subtitulo}>
            Aumente seu conhecimento sobre mente e corpo.
          </Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollFiltros}
        >
          {filtros.map(filtro => (
            <TouchableOpacity
              key={filtro}
              style={[
                styles.filtro,
                selectedFilter === filtro && styles.filtroSelecionado,
              ]}
              onPress={() => setSelectedFilter(filtro)}
            >
              <Text
                style={[
                  styles.filtroTexto,
                  selectedFilter === filtro && styles.filtroTextoSelecionado,
                ]}
              >
                {filtro}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <ConhecimentoCards filtroAtivo={selectedFilter} />
      </ScrollView>
    </LinearGradient>
  )
}
