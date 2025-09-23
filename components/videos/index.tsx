import { Text, View } from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe'
import { styles } from './estilo.styles'

export default function Videos() {
  const videosMeditacao = [
    {
      id: 'sJjyX9W-E-Y',
      play: false,
      descricao:
        'Meditação guiada para aliviar ansiedade e encontrar calma interior em poucos minutos.',
    },
    {
      id: 'sJjyX9W-E-Y',
      play: false,
      descricao:
        'Meditação guiada para aliviar ansiedade e encontrar calma interior em poucos minutos.',
    },
  ]

  
  const videosExercicios = [
    {}
  ]

  return (
    <>
      {videosMeditacao.map((video, i) => (
        <View style={styles.videos} key={i}>
          <YoutubePlayer height={230} play={video.play} videoId={video.id} />
          <Text style={styles.descricaoVideos}>{video.descricao}</Text>
        </View>
      ))}
    </>
  )
}
