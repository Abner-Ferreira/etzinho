import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  card: {
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },

  headerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  iconCard: {
    width: 35,
    height: 35,
    marginRight: 10,
  },

  headerTextContainer: {
    flex: 1,
    flexDirection: 'column',
  },

  tituloCard: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1ab394',
    fontFamily: 'Inter_600SemiBold'
  },

  
  descricaoCard: {
    fontSize: 14,
    color: '#555',
    marginTop: 6,
    marginBottom: 10, 
    lineHeight: 20,
    fontFamily: 'Inter_400Regular'
  },

  label: {
    fontWeight: 'bold',
    fontSize: 13,
    color: '#1ab394',
    marginTop: 10,
    fontFamily: 'Inter_600SemiBold'
  },

  text: {
    fontSize: 13,
    color: '#555',
    marginTop: 3,
    lineHeight: 19,
    fontFamily: 'Inter_400Regular'
  },

  subtituloCard: {
    color: '#1ab394',
    fontWeight: '700',
    marginTop: 14,
    fontSize: 14,
    fontFamily: 'Inter_600SemiBold'
  },

  rowPessoas: {
    flexDirection: 'row',
    marginTop: 10,
  },

  colunaPessoa: {
    alignItems: 'center',
    marginRight: 15,
  },

  fotoPessoa: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 4,
  },

  nomePessoa: {
    fontSize: 12,
    color: '#555',
    fontFamily: 'Inter_400Regular'
  },
})
