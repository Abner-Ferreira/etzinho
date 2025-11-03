import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  containerCard: {
    marginVertical: 20,
  },
  textoSessao: {
    fontSize: 24,
    lineHeight: 34,
    marginBottom: 20,
    fontFamily: 'Inter_700Bold',
    color: '#2b6c5b',
  },
  conteudoCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 100,
    borderRadius: 16,
    backgroundColor: '#c1eee9ff',
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
 concluidoCardContainer: {
  backgroundColor: '#daf8f2', // verde suave mas visível
  borderWidth: 1,
  borderColor: '#1ab394', // contorno leve
},
concluidoTituloCard: {
  textDecorationLine: 'line-through',
  opacity: 0.6, // mantemos visível
},
concluidoObjetivoCard: {
  color: '#3e5c64', // subtítulo mais escuro que o original, mas harmonioso
  opacity: 0.4, // mantemos visível
  textDecorationLine: 'line-through'
},
concluidoMensagem: {
  marginTop: 6,
  fontSize: 14,
  fontFamily: 'Inter_500Medium',
  color: '#1ab394', // mantém a cor do check
  fontWeight: '500',
},
})
