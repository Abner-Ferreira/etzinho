import { Text, View } from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe'
import { styles } from './estilo.styles'

export default function Videos() {
  const videosMeditacao = [
    {
      id: 'IeHracvOX9g',
      play: false,
      descricao:
        'Yoga suave e rápida para despertar o corpo e aliviar a preguiça em apenas 10 minutos.',
    },
    {
      id: 'TkPZ7QqrV8k',
      play: false,
      descricao:
        'Yoga para pausar, alongar e relaxar — prática de 18 minutos para aliviar o estresse e trazer tranquilidade.',
    },
    {
      id: 'OzbP2QZ3ZwQ',
      play: false,
      descricao:
        'Yoga para todos os dias — prática de 20 minutos para fortalecer o corpo, acalmar a mente e reconectar-se com seu momento presente.',
    },
  ]

  return (
    <>
      {videosMeditacao.map((video, i) => (
        <View style={styles.videos} key={i}>
          <YoutubePlayer height={200} play={video.play} videoId={video.id} />
          <Text style={styles.descricaoVideos}>{video.descricao}</Text>
        </View>
      ))}
    </>
  )
}
