import Cards from '@/src/components/card'
import ChatbotCard from '@/src/components/cardChatbot'
import SugestaoDiariaCard from '@/src/components/cardSugestao/cardSugestao'
import { AuthContext } from '@/src/contexts/AuthContext'
import { styles } from '@/src/styles/global.styles'
import { LinearGradient } from 'expo-linear-gradient'
import { useContext, useEffect, useRef, useState } from 'react'
import { Animated, ScrollView, Text } from 'react-native'

export default function Home() {
  const { user } = useContext(AuthContext)

  const [fraseMotivacional, setFraseMotivacional] = useState('')

  const fadeAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start()

    const agora = new Date()
    const hora = agora.getHours()

    if (hora >= 5 && hora < 12) {
      setFraseMotivacional(
        'Bom dia, terráqueo radiante! 🌞 O universo sorri pra você hoje!'
      )
    } else if (hora >= 12 && hora < 18) {
      setFraseMotivacional(
        'Boa tarde, terráqueo! 🚀 Continue brilhando por aí!'
      )
    } else {
      setFraseMotivacional(
        'Boa noite, terráqueo! 🌙 Você fez o seu melhor hoje!'
      )
    }
  }, [])

  return (
    <LinearGradient colors={['#d4f1e6', '#e9f9f5']} style={styles.gradient}>
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        style={styles.container}
        nestedScrollEnabled
      >
        <Text style={styles.titulo}>
          Olá, {user?.nome ? user?.nome?.split(' ')[0] : user?.email}!
        </Text>

        <Animated.Text
          style={[
            styles.subtitulo,
            { opacity: fadeAnim },
          ]}
        >
          {fraseMotivacional}
        </Animated.Text>

        {/* Rolagem horizontal com navegação */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScroll}
        >
          <Cards />
        </ScrollView>

        <ChatbotCard />
        <SugestaoDiariaCard />
        <Text style={styles.textoMotivacao}>Orgulhe-se do que você já conquistou hoje. 🌟</Text>
      </ScrollView>
    </LinearGradient>
  )
}
