import { LinearGradient } from 'expo-linear-gradient'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe'
import { styles } from './estilizacao.styles'
import Videos from '@/components/videos'

export default function Meditacao() {
  return (
    <LinearGradient colors={['#ffffff', '#d9f2ef']} style={styles.gradient}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.container}>
        <View style={styles.containerIntroducao}>
          <Text style={styles.titulo}>Espaço Zen do Etzinho</Text>
          <Text style={styles.subtitulo}>
            Equilibre sua mente e encontre serenidade
          </Text>
          <Text style={styles.introducao}>
            Às vezes, tudo o que precisamos é de um momento para respirar e nos
            reconectar. No Espaço Zen do Etzinho, você encontrará meditações
            guiadas cuidadosamente preparadas para ajudar a acalmar a mente,
            aliviar o estresse e trazer mais leveza ao seu dia. Reserve um
            tempinho para si mesmo, siga as orientações das meditações e
            permita-se sentir a paz que vem de dentro.
          </Text>
        </View>
        <View style={styles.containerVideos}>
          <Videos />
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

// const styles = StyleSheet.create({
//   gradient: {
//     flex: 1,
//   },
//   headerImage: {
//     color: '#808080',
//     bottom: -90,
//     left: -35,
//     position: 'absolute',
//   },
//   titleContainer: {
//     flexDirection: 'row',
//     gap: 8,
//   },
// })
