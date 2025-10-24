import { ConhecimentoCards } from '@/src/components/cardConhecimento'
import { LinearGradient } from 'expo-linear-gradient'
import { ScrollView, Text } from 'react-native'
import { styles } from '../../../src/styles/conhecimento.styles'

export default function Conhecimento() {

  
  return (
    <LinearGradient colors={['#ffffff', '#d9f2ef']} style={styles.gradient}>
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        style={styles.container}
        nestedScrollEnabled
      >
        <Text style={styles.texto}>Aumente o seu conhecimento</Text>
        <ConhecimentoCards />
      </ScrollView>
    </LinearGradient>
  )
}
