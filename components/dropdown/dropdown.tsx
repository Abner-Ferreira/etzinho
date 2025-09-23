import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import { styles } from './estilizacao.styles'

const categorias = [
  'Todas as receitas',
  'Café da Manhã',
  'Almoço',
  'Jantar',
  'Lanchinhos para beliscar',
]
const categoriasEntretenimento = [
  'Todas as categorias',
  'Filmes gratuitos',
  'Livros gratuitos',
]

type Props = {
  onSelect: (categoria: string) => void
  selected: string
  renderizarSessao: string
}

export default function DropdownMenu({
  onSelect,
  selected,
  renderizarSessao,
}: Props) {
  const [aberto, setAberto] = useState(false)

  const handleSelect = (item: string) => {
    onSelect(item)
    setAberto(false)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuHeader}
        onPress={() => setAberto(!aberto)}
        activeOpacity={0.7}
      >
        {renderizarSessao === 'Receitas' ? (
          <AntDesign
            name='book'
            size={18}
            color='#1ab394'
            style={{ marginRight: 6 }}
          />
        ) : (
          <MaterialCommunityIcons
            name='movie-open-outline'
            size={18}
            color='#1ab394'
            style={{ marginRight: 6 }}
          />
        )}
        <Text style={styles.menuText}>
          {renderizarSessao === 'Receitas'
            ? selected || 'Todas as receitas'
            : selected || 'Todas as categorias'}
        </Text>
        <AntDesign
          name={aberto ? 'up' : 'down'}
          size={16}
          color='#1ab394'
          style={{ marginLeft: 'auto' }}
        />
      </TouchableOpacity>

      {aberto && (
        <FlatList
          data={
            renderizarSessao === 'Receitas'
              ? categorias
              : categoriasEntretenimento
          }
          keyExtractor={item => item}
          style={styles.dropdown}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.item}
              onPress={() => handleSelect(item)}
            >
              <Text style={styles.itemText}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  )
}
