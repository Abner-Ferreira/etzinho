import { Asset } from 'expo-asset'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useMemo, useState } from 'react'
import {
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { styles } from '@/src/styles/lazer.styles'
import { livros } from '@/src/data/livros'


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
        alert('Não foi possível localizar o arquivo PDF.')
        return
      }

      await Linking.openURL(localUri)
    } catch (error) {
      console.error('Erro ao abrir PDF:', error)
      alert('Erro ao abrir o livro.')
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
              <Text style={styles.subtitulo}>Nenhum livro selecionado</Text>
              <Text style={styles.tituloPrincipal}>
                Explore nossas categorias e escolha um livro para ver a sinopse!
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
