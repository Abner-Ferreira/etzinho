import { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Image, ScrollView, Text, View } from 'react-native'
import DropdownMenu from '@/src/components/dropdown/dropdown'
import { styles } from './estilizacao.styles'

// imagens dos livros
import imgAlice from '../../../src/assets/images/entrenimento/capa-alice-no-pais-das-maravilhas.webp'
import imgCupcake from '../../../src/assets/images/entrenimento/capa-o-cupcake-da-discordia.jpg'
import imgJardim from '../../../src/assets/images/entrenimento/capa-o-jardim-secreto.jpg'
import imgPequenoHeroi from '../../../src/assets/images/entrenimento/capa-o-pequeno-heroi.jpg'
import imgPequenoPrincipe from '../../../src/assets/images/entrenimento/capa-o-pequeno-principe.jpg'

export default function Entretenimento() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('')

  const entretenimentos = [
    {
      id: 1,
      categoria: 'Fantasia',
      titulo: 'Alice no País das Maravilhas - Lewis Carroll',
      imagem: imgAlice,
      descricao:
        'Uma menina curiosa cai numa toca de coelho e descobre um mundo mágico cheio de personagens excêntricos e aventuras surreais.'
    },
    {
      id: 2,
      categoria: 'Humor',
      titulo: 'O Cupcake da Discórdia - Stefania Gil',
      imagem: imgCupcake,
      descricao:
        'Romance leve e divertido sobre rivalidade, segredos e romance que nasce em torno de uma confeitaria especial.'
    },
    {
      id: 3,
      categoria: 'Fantasia',
      titulo: 'O Jardim Secreto - Frances Hodgson Burnett',
      imagem: imgJardim,
      descricao:
        'Uma menina solitária descobre um jardim abandonado e, ao restaurá-lo, transforma também sua própria vida e a dos que estão à sua volta.'
    },
    {
      id: 4,
      categoria: 'Reflexão',
      titulo: 'O Pequeno Herói - Judith Steen',
      imagem: imgPequenoHeroi,
      descricao:
        'História inspiradora de coragem e superação de uma criança que, mesmo diante das dificuldades, encontra forças para ser um verdadeiro herói.'
    },
    {
      id: 5,
      categoria: 'Reflexão',
      titulo: 'O Pequeno Príncipe - Antoine de Saint-Exupéry',
      imagem: imgPequenoPrincipe,
      descricao:
        'Um piloto perdido no deserto encontra um menino vindo de outro planeta, e através de conversas simples, descobre reflexões profundas sobre amor, amizade e a essência da vida.'
    },
  ]

  const entretenimentosFiltrados = categoriaSelecionada && categoriaSelecionada !== "Todos os livros"
    ? entretenimentos.filter(entretenimento => entretenimento.categoria === categoriaSelecionada)
    : entretenimentos

  return (
    <LinearGradient colors={['#ffffff', '#d9f2ef']} style={styles.gradient}>
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        style={styles.container}
        nestedScrollEnabled
      >
        <DropdownMenu
          selected={categoriaSelecionada}
          onSelect={categoria => setCategoriaSelecionada(categoria)}
          renderizarSessao="Filmes"
        />

        {entretenimentosFiltrados.length > 0 ? entretenimentosFiltrados.map(entretenimento => (
          
          <View key={entretenimento.id} style={styles.containerEntretenimentos}>
            <Text style={styles.titulo}>{entretenimento.titulo}</Text>
            <Image
              source={entretenimento.imagem}
              style={{ width:'100%', height: 400, marginBottom: 10 }}
            />
            <Text style={styles.descricao}>{entretenimento.descricao}</Text>
          </View>
        )) 
        : <Text style={styles.textoSemEntretenimento}>Nenhum livro disponível</Text>
      }
      </ScrollView>
    </LinearGradient>
  )
}
