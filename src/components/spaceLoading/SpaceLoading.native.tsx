import React from 'react'
import { View } from 'react-native'
import LottieView from 'lottie-react-native'
import { styles } from './estilizacao.styles'
import ufo from '@/src/assets/UFO.json'

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
