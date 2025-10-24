import Cards from '@/src/components/card'
import SugestaoDiariaCard from '@/src/components/cardSugestao/cardSugestao'
import { LinearGradient } from 'expo-linear-gradient'
import { ScrollView, Text } from 'react-native'
import { styles } from '../../src/styles/global.styles'
import { useContext } from 'react'
import { AuthContext } from '@/src/contexts/AuthContext'

export default function Home() {

  const {user} = useContext(AuthContext)

  console.log(user)
  console.log(user?.nome.split(" ")[0])
  return (
    <LinearGradient colors={['#ffffff', '#d9f2ef']} style={styles.gradient}>
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        style={styles.container}
        nestedScrollEnabled
      >
        <Text style={styles.titulo}>Olá {user?.nome ? user?.nome?.split(" ")[0] : user?.email}</Text>
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
