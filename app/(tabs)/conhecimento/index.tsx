import { LinearGradient } from 'expo-linear-gradient'
import { ScrollView, Text } from 'react-native'
import { styles } from './estilizacao.styles'

export default function Conhecimento() {

  
  return (
    <LinearGradient colors={['#ffffff', '#d9f2ef']} style={styles.gradient}>
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        style={styles.container}
        nestedScrollEnabled
      >
        <Text style={styles.texto}>Página em andamento</Text>
      </ScrollView>
    </LinearGradient>
  )
}
