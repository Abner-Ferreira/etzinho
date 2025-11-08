import { livros } from '@/src/data/livros'
import { styles } from '@/src/styles/lazer.styles'
import { Asset } from 'expo-asset'
import { LinearGradient } from 'expo-linear-gradient'
import { useMemo, useState } from 'react'
import {
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import Toast from 'react-native-toast-message'

export default function Lazer() {
  const [categoriaSelecionada, setCategoriaSelecionada] =
    useState('Todos os livros')
  const [livroSelecionado, setLivroSelecionado] = useState<any>(null)

  const categorias = ['Todos os livros', 'Fantasia', 'Humor', 'Reflexão']

  const livrosFiltrados = useMemo(() => {
    if (categoriaSelecionada === 'Todos os livros') return livros
    return livros.filter(e => e.categoria === categoriaSelecionada)
  }, [categoriaSelecionada])

  async function openPdf(pdfAsset: any) {
    try {
      const asset = Asset.fromModule(pdfAsset)
      await asset.downloadAsync()

      const localUri = asset.localUri || asset.uri

      if (!localUri) {
        Toast.show({
          type: 'error',
          text1: 'Erro',
          text2: 'Não foi possível localizar o arquivo PDF.',
        })
        return
      }

      await Linking.openURL(localUri)
    } catch (error) {
      Toast.show({
          type: 'error',
          text1: 'Erro',
          text2: 'Erro ao abrir o livro.',
        })
    }
  }

  return (
    <LinearGradient colors={['#d4f1e6', '#e9f9f5']} style={styles.gradient}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Filtros */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriasContainer}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        >
          {categorias.map(cat => (
            <TouchableOpacity
              key={cat}
              onPress={() => {
                setCategoriaSelecionada(cat)
                setLivroSelecionado(null)
              }}
              style={[
                styles.categoriaTag,
                categoriaSelecionada === cat && styles.categoriaAtiva,
              ]}
            >
              <Text
                style={[
                  styles.categoriaTexto,
                  categoriaSelecionada === cat && styles.categoriaTextoAtivo,
                ]}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* LISTA DE LIVROS */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginVertical: 35 }}
          contentContainerStyle={{ paddingHorizontal: 10 }}
        >
          {livrosFiltrados.map(livro => (
            <TouchableOpacity
              key={livro.id}
              style={[
                styles.cardLivro,
                livroSelecionado?.id === livro.id && styles.cardSelecionado,
              ]}
              onPress={() => setLivroSelecionado(livro)}
            >
              <Image source={livro.imagem} style={styles.imagemLivro} />
              <Text style={styles.tituloLivro}>
                {livro.titulo.split(' - ')[0]}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Card de texto */}
        <View style={styles.sinopseContainer}>
          {livroSelecionado ? (
            <>
              <Text style={styles.subtitulo}>Sinopse:</Text>
              <Text style={styles.tituloPrincipal}>
                {livroSelecionado.titulo.split(' - ')[0]}
              </Text>
              <Text style={styles.autor}>
                {livroSelecionado.titulo.split(' - ')[1]}
              </Text>
              <Text style={styles.descricao}>{livroSelecionado.descricao}</Text>

              <TouchableOpacity
                style={styles.botaoLerLivro}
                onPress={() => openPdf(livroSelecionado.pdf)}
              >
                <Text style={styles.textoBotao}>Ler livro</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text style={styles.subtitulo}>
                Nenhum livro por aqui ainda 🌱
              </Text>
              <Text style={styles.tituloPrincipal}>
                Explore e encontre o que mais combina com você hoje!
              </Text>
              <Text style={styles.textoExtra}>
                Você pode filtrar os livros acima por categoria e navegar pelas
                capas. Clique em qualquer capa para ver mais detalhes.
              </Text>
            </>
          )}
        </View>
      </ScrollView>
    </LinearGradient>
  )
}
