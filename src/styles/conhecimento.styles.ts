import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    padding: 20,
  },
  header: {
    marginBottom: 15,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2b6c5b',
    fontFamily: 'Inter_700Bold'
  },
  subtitulo: {
    fontSize: 14,
    color: '#4a7063',
    marginTop: 2,
    fontFamily: 'Inter_400Regular'
  },
  scrollFiltros: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  filtro: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 8,
    backgroundColor: '#fff',
  },
  filtroSelecionado: {
    backgroundColor: '#1ab394',
    borderColor: '#1ab394',
  },
  filtroTexto: {
    fontSize: 13,
    color: '#444',
    fontFamily: 'Inter_400Regular'
  },
  filtroTextoSelecionado: {
    color: '#fff',
    fontWeight: '600',
    fontFamily: 'Inter_600SemiBold'
  },
})
