import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    paddingBottom: 10,
    paddingTop: 36,
  },
  container: {
    padding: '5%',
  },
  containerIntroducao: {
    marginBottom: 30,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'baseline',
  },
  titulo: {
    fontSize: 28,
    lineHeight: 34,
    fontFamily: 'Inter_700Bold',
    color: '#1ab394',
  },
  subtitulo: {
    fontSize: 18,
    lineHeight: 26,
    fontFamily: 'Inter_500Regular',
    color: '#1ab394',
  },
  introducao: {
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'justify',
    fontFamily: 'Inter_400Regular',
    color: '#6E7C91',
    marginTop: 20
  },
  containerVideos: {
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // flexDirection: 'column',
  },
})
