import { Image, StyleSheet, Text, View } from 'react-native'
import etzinho from '../../assets/images/etzinho.png'
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './estilizacao.styles'

export default function Splash() {
  return (
    <LinearGradient colors={['#ffffff', '#d9f2ef']} style={styles.gradient}>
      <Image source={etzinho} style={styles.logo} />
      <Text style={styles.text}>
        Seja bem-vindo!
      </Text>
    </LinearGradient>
  )
}
