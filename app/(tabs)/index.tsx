import Cards from '@/components/card'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { Pressable, ScrollView, Text, View } from 'react-native'
import { styles } from './estilizacao.styles'
import { useState } from 'react'

export default function Home() {
  const [checked, setChecked] = useState(false)

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

        <View style={styles.containerCard}>
          <Text style={styles.textoSessao}>Sugestão diária</Text>
          <Pressable
            key='Sugestao'
            onPress={() => setChecked(!checked)}
            accessibilityRole='button'
            accessibilityLabel={`Abrir de sugestão diária`}
            style={({ pressed }) => [
              pressed && { transform: [{ scale: 0.995 }], opacity: 0.96 },
            ]}
          >
            <View style={styles.conteudoCardContainer}>
              <View style={styles.conteudoCard}>
                <Text style={[styles.tituloCard, {textDecorationLine: checked ? 'line-through' : 'none'}]}>Respiração profunda</Text>
                <Text style={styles.objetivoCard}>
                  Respire fundo por 2 minutos
                </Text>
              </View>
              <MaterialCommunityIcons
                name='check-circle'
                size={32}
                color={checked ? '#1ab394' : '#1ab39447'}
              />
            </View>
          </Pressable>
        </View>
        <Text style={styles.textoMotivacao}>Você pode fazer isso! 💪</Text>
      </ScrollView>
    </LinearGradient>
  )
}
