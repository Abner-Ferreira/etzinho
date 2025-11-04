import ufo from '@/src/assets/UFO.json'
import LottieView from 'lottie-react-native'
import { View } from 'react-native'
import { styles } from './estilizacao.styles'

export default function SpaceLoading() {
  return (
    <View style={styles.container}>
      <LottieView
        source={ufo}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  )
}


