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

// imagens dos livros
import imgAlice from '@/src/assets/images/entrenimento/capa-alice-no-pais-das-maravilhas.webp'
import imgCupcake from '@/src/assets/images/entrenimento/capa-o-cupcake-da-discordia.jpg'
import imgJardim from '@/src/assets/images/entrenimento/capa-o-jardim-secreto.jpg'
import imgPequenoHeroi from '@/src/assets/images/entrenimento/capa-o-pequeno-heroi.jpg'
import imgPequenoPrincipe from '@/src/assets/images/entrenimento/capa-o-pequeno-principe.jpg'

// pdfs dos livros
import pdfAlice from '@/src/assets/livros/alice-no-pais-das-maravilhas.pdf'
import pdfCupcake from '@/src/assets/livros/o-cupcake-da-discordia.pdf'
import pdfJardim from '@/src/assets/livros/o-jardim-secreto.pdf'
import pdfPequenoHeroi from '@/src/assets/livros/o-pequeno-heroi.pdf'
import pdfPequenoPrincipe from '@/src/assets/livros/o-pequeno-principe.pdf'

export default function Lazer() {
  const [categoriaSelecionada, setCategoriaSelecionada] =
    useState('Todos os livros')
  const [livroSelecionado, setLivroSelecionado] = useState<any>(null)

  const categorias = ['Todos os livros', 'Fantasia', 'Humor', 'Reflexão']

  const entretenimentos = [
    {
      id: 1,
      categoria: 'Fantasia',
      titulo: 'Alice no País das Maravilhas - Lewis Carroll',
      imagem: imgAlice,
      pdf: pdfAlice,
      descricao:
        'Uma menina curiosa cai numa toca de coelho e descobre um mundo mágico cheio de personagens excêntricos e aventuras surreais.',
    },
    {
      id: 2,
      categoria: 'Humor',
      titulo: 'O Cupcake da Discórdia - Stefania Gil',
      imagem: imgCupcake,
      pdf: pdfCupcake,
      descricao:
        'Romance leve e divertido sobre rivalidade, segredos e romance que nasce em torno de uma confeitaria especial.',
    },
    {
      id: 3,
      categoria: 'Fantasia',
      titulo: 'O Jardim Secreto - Frances Hodgson Burnett',
      imagem: imgJardim,
      pdf: pdfJardim,
      descricao:
        'Uma menina solitária descobre um jardim abandonado e, ao restaurá-lo, transforma também sua própria vida e a dos que estão à sua volta.',
    },
    {
      id: 4,
      categoria: 'Reflexão',
      titulo: 'O Pequeno Herói - Judith Steen',
      imagem: imgPequenoHeroi,
      pdf: pdfPequenoHeroi,
      descricao:
        'História inspiradora de coragem e superação de uma criança que, mesmo diante das dificuldades, encontra forças para ser um verdadeiro herói.',
    },
    {
      id: 5,
      categoria: 'Reflexão',
      titulo: 'O Pequeno Príncipe - Antoine de Saint-Exupéry',
      imagem: imgPequenoPrincipe,
      pdf: pdfPequenoPrincipe,
      descricao:
        'Um piloto perdido no deserto encontra um menino vindo de outro planeta, e através de conversas simples, descobre reflexões profundas sobre amor, amizade e a essência da vida.',
    },
  ]

  const entretenimentosFiltrados = useMemo(() => {
    if (categoriaSelecionada === 'Todos os livros') return entretenimentos
    return entretenimentos.filter(e => e.categoria === categoriaSelecionada)
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
          {entretenimentosFiltrados.map(livro => (
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
