import { Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    paddingBottom: 10,
    paddingTop: 36,
  },
  container: {
    padding: '5%',
  },
  categoriasContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginTop: 30,
  },
  categoriaTag: {
    paddingBottom: 12,
    paddingHorizontal: 16,
    marginRight: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  categoriaAtiva: {
    borderBottomColor: '#1ab394',
  },
  categoriaTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  categoriaTextoAtivo: {
    color: '#1ab394',
  },
  cardLivro: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginRight: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    width: width * 0.45,
    alignItems: 'center',
    padding: 10,
  },
  cardSelecionado: {
    borderColor: '#1ab394',
    borderWidth: 2,
  },
  imagemLivro: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 8,
  },
  tituloLivro: {
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  sinopseContainer: {
    backgroundColor: '#fff',
    marginTop: 25,
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
    minHeight: 140,
    justifyContent: 'center',
  },
  subtitulo: {
    color: '#777',
    marginBottom: 6,
    fontSize: 14,
  },
  tituloPrincipal: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1ab394',
    marginBottom: 6,
  },
  autor: {
    color: '#555',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  descricao: {
    color: '#444',
    fontSize: 15,
    lineHeight: 22,
  },
  textoExtra: {
    color: '#555',
    fontSize: 15,
    lineHeight: 22,
  },
  botaoLerLivro: {
    backgroundColor: '#1ab394',
    borderRadius: 16,
    marginRight: 16,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    width: width * 0.35,
    alignItems: 'center',
    padding: 10,
  },
   textoBotao: {
    fontWeight: '600',
    color: '#ffffffff',
    textAlign: 'center',
  },
})
