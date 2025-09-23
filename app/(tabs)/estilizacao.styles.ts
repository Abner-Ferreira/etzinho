import { Dimensions, Platform, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')

/* ajustes responsivos de fonte */
const HEADING_FONT = width >= 420 ? 34 : width >= 360 ? 30 : 26
const SUBTITLE_FONT = Math.round(HEADING_FONT * 0.55)
const SECTION_TITLE = Math.round(HEADING_FONT * 0.6)


export const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    paddingBottom: 10,
    paddingTop: 36,
  },
  container: {
    padding: '5%',
  },

  /* header */
  titulo: {
    fontSize: HEADING_FONT,
    lineHeight: 34,
    marginBottom: 20,
    fontFamily: 'Inter_700Bold',
    color: '#1ab394',
  },
  subtitulo: {
    fontSize: SUBTITLE_FONT,
    lineHeight: 26,
    fontFamily: 'Inter_500Regular',
    color: '#6E7C91',
  },

  /* horizontal scroll */
  horizontalScroll: {
    paddingVertical: 8,
    paddingLeft: 2,
    paddingRight: 12,
    alignItems: 'center',
    marginVertical: 30,
  },
  containerCard: {
    marginVertical: 20,
    
  },
  textoSessao: {
    fontSize: 24,
    lineHeight: 34,
    marginBottom: 20,
    fontFamily: 'Inter_700Bold',
    color: '#1ab394',
  },
  conteudoCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 100,
    borderRadius: 16,
    backgroundColor: '#c1eee9ff'
  },
  conteudoCard: {},
  tituloCard: {
    fontSize: 18,
    lineHeight: 30,
    marginBottom: 5,
    fontFamily: 'Inter_700Bold',
    color: '#1ab394',
  },
  objetivoCard: {
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Inter_500Regular',
    color: '#6E7C91',
  },
  textoMotivacao:{
    marginVertical: 30,
    textAlign: 'center',
    color: '#6E7C91',
    fontSize: 26
  }
})
