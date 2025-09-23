import { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Image, ScrollView, Text, View } from 'react-native'
import DropdownMenu from '@/components/dropdown/dropdown'
import { styles } from './estilizacao.styles'
import imgPao from '../../../assets/images/icon.png'

export default function Receitas() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('')

  const receitas = [
    {
      id: 1,
      categoria: 'Café da Manhã',
      titulo: 'Pão com ovo',
      imagem: imgPao,
      descricao:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, maxime. Nesciunt eligendi error placeat sapiente maiores aliquid reprehenderit, itaque minima adipisci ipsum dicta magni nostrum facilis velit! In, sit earum!',
    },
    {
      id: 2,
      categoria: 'Almoço',
      titulo: 'Strogonoff',
      imagem: imgPao,
      descricao:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, maxime. Nesciunt eligendi error placeat sapiente maiores aliquid reprehenderit, itaque minima adipisci ipsum dicta magni nostrum facilis velit! In, sit earum!',
    },
    {
      id: 3,
      categoria: 'Jantar',
      titulo: 'Pizza',
      imagem: imgPao,
      descricao:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, maxime. Nesciunt eligendi error placeat sapiente maiores aliquid reprehenderit, itaque minima adipisci ipsum dicta magni nostrum facilis velit! In, sit earum!',
    },
  ]

  const receitasFiltradas = categoriaSelecionada && categoriaSelecionada !== "Todas as receitas"
    ? receitas.filter(receita => receita.categoria === categoriaSelecionada)
    : receitas

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
          renderizarSessao="Receitas"
        />

        {receitasFiltradas.length > 0 ? receitasFiltradas.map(receita => (
          
          <View key={receita.id} style={styles.containerReceitas}>
            <Text style={styles.titulo}>{receita.titulo}</Text>
            <Image
              source={receita.imagem}
              style={{ width:'100%', height: 200, marginBottom: 10 }}
            />
            
            <Text style={styles.descricao}>{receita.descricao}</Text>
          </View>
        )) 
        : <Text style={styles.textoSemReceita}>Receitas indisponíves</Text>
      }
      </ScrollView>
    </LinearGradient>
  )
}
