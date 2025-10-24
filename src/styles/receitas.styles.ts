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

  containerReceitas: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 30,
    marginVertical: 20,
    width: '100%',

    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,

    // Android shadow
    elevation: 5,
  },

  titulo: {
    fontSize: 28,
    lineHeight: 34,
    marginBottom: 20,
    fontFamily: 'Inter_700Bold',
    color: '#1ab394',
  },
  descricao: {
    fontSize: 16,
    lineHeight: 34,
    fontFamily: 'Inter_400Regular',
    color: '#6E7C91',
    textAlign: 'justify'
  },
  textoSemReceita: {
    marginHorizontal: 'auto',
    marginVertical: 30,
    color: '#6E7C91',
    fontSize: 24
  }
})
