import { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Image, ScrollView, Text, View } from 'react-native'
import DropdownMenu from '@/components/dropdown/dropdown'
import { styles } from './estilizacao.styles'
import imgPao from '../../../assets/images/icon.png'

export default function Entretenimento() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('')

  const entretenimentos = [
    {
      id: 1,
      categoria: 'Filmes gratuitos',
      titulo: 'Top Gun: Maverick',
      imagem: imgPao,
      descricao:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, maxime. Nesciunt eligendi error placeat sapiente maiores aliquid reprehenderit, itaque minima adipisci ipsum dicta magni nostrum facilis velit! In, sit earum!',
    },
    {
      id: 2,
      categoria: 'Filmes gratuitos',
      titulo: 'Como eu era antes de você',
      imagem: imgPao,
      descricao:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, maxime. Nesciunt eligendi error placeat sapiente maiores aliquid reprehenderit, itaque minima adipisci ipsum dicta magni nostrum facilis velit! In, sit earum!',
    },
    {
      id: 3,
      categoria: 'Livros gratuitos',
      titulo: 'A culpa é das estrelas',
      imagem: imgPao,
      descricao:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, maxime. Nesciunt eligendi error placeat sapiente maiores aliquid reprehenderit, itaque minima adipisci ipsum dicta magni nostrum facilis velit! In, sit earum!',
    },
  ]

  const entretenimentosFiltrados = categoriaSelecionada && categoriaSelecionada !== "Todas as categorias"
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
              style={{ width:'100%', height: 200, marginBottom: 10 }}
            />
            <Text style={styles.descricao}>{entretenimento.descricao}</Text>
          </View>
        )) 
        : <Text style={styles.textoSemEntretenimento}>Nenhum filme/livro disponível</Text>
      }
      </ScrollView>
    </LinearGradient>
  )
}
