import React from 'react'
import { View } from 'react-native'
import LottiePlayer from 'react-lottie-player'
import { styles } from './estilizacao.styles'
import ufo from '@/src/assets/UFO.json'

export default function SpaceLoading() {
  return (
    <View style={styles.container}>
      <LottiePlayer
        play
        loop
        animationData={ufo}
        style={styles.animation}
      />
    </View>
  )
}
