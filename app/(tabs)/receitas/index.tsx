import { MaterialCommunityIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useMemo, useState } from 'react'
import {
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { styles } from '@/src/styles/receitas.styles'
import { receitas } from '@/src/data/receitas'

export default function Receitas() {
  const [categoria, setCategoria] = useState('Todas')
  const [modalVisible, setModalVisible] = useState(false)
  const [receitaSelecionada, setReceitaSelecionada] = useState<any>(null)

  const categorias = [
    'Todas',
    'Café da Manhã',
    'Almoço',
    'Jantar',
    'Lanches rápidos',
  ]

  // Filtra as receitas
  const receitasFiltradas =
    categoria === 'Todas'
      ? receitas
      : receitas.filter(r => r.categoria === categoria)

  // Receitas aleatorias a cada dia
  const receitaDoDia = useMemo(() => {
    const hoje = new Date()
    const seed = hoje.getDate() + hoje.getMonth() * 30 + hoje.getFullYear()
    const lista = receitasFiltradas.length ? receitasFiltradas : receitas
    const index = seed % lista.length
    return lista[index]
  }, [categoria])

  // Todas as receitas aparecem conforme a categoria
  const maisReceitas = useMemo(() => {
    return receitasFiltradas.filter(r => r.id !== receitaDoDia.id)
  }, [categoria, receitaDoDia])

  // Pega 1 receita de cada categorias
  const topReceitas = useMemo(() => {
    const categoriasUnicas = [
      'Café da Manhã',
      'Almoço',
      'Jantar',
      'Lanches rápidos',
    ]
    return categoriasUnicas
      .map(cat => receitas.find(r => r.categoria === cat))
      .filter(Boolean)
  }, [])

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
                setCategoria(cat)
              }}
              style={[
                styles.categoriaTag,
                categoria === cat && styles.categoriaAtiva,
              ]}
            >
              <Text
                style={[
                  styles.categoriaTexto,
                  categoria === cat && styles.categoriaTextoAtivo,
                ]}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* RECEITA DO DIA */}
        <Text style={styles.tituloSecao}>Receitas do dia</Text>
        <View style={styles.receitaDoDia}>
          <Image source={receitaDoDia.imagem} style={styles.imagemDestaque} />
          <View style={styles.infoDestaque}>
            <Text style={styles.tituloDestaque}>{receitaDoDia.titulo}</Text>
            <View style={styles.infoExtras}>
              <MaterialCommunityIcons
                name='clock-outline'
                color='#777'
                size={16}
              />
              <Text style={styles.textExtra}>{receitaDoDia.tempo}</Text>
              <MaterialCommunityIcons
                name='fire'
                color='#777'
                size={16}
                style={{ marginLeft: 8 }}
              />
              <Text style={styles.textExtra}>{receitaDoDia.kcal} kcal</Text>
            </View>
            <TouchableOpacity
              style={styles.botaoVerReceita}
              onPress={() => {
                setReceitaSelecionada(receitaDoDia)
                setModalVisible(true)
              }}
            >
              <Text style={styles.textoBotao}>Ver receita</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* MAIS RECEITAS */}
        <Text style={styles.tituloSecao}>Mais receitas</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {maisReceitas.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.cardReceitaPequena}
              onPress={() => {
                setReceitaSelecionada(item)
                setModalVisible(true)
              }}
            >
              <Image source={item.imagem} style={styles.imagemCardPequeno} />
              <Text style={styles.textoCard}>{item.titulo}</Text>
              <View style={styles.infoExtrasCard}>
                <MaterialCommunityIcons
                  name='clock-outline'
                  color='#777'
                  size={14}
                />
                <Text style={styles.textExtra}>{item.tempo}</Text>
                <MaterialCommunityIcons
                  name='fire'
                  color='#777'
                  size={14}
                  style={{ marginLeft: 6 }}
                />
                <Text style={styles.textExtra}>{item.kcal} kcal</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* TOP RECEITAS */}
        <Text style={styles.tituloSecao}>Top receitas</Text>
        {topReceitas.map(item => (
          <TouchableOpacity
            key={item?.id}
            style={styles.cardLista}
            onPress={() => {
              setReceitaSelecionada(item)
              setModalVisible(true)
            }}
          >
            <Image source={item?.imagem} style={styles.imgLista} />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.tituloLista}>{item?.titulo}</Text>
              <View style={styles.infoExtrasCard}>
                <MaterialCommunityIcons
                  name='clock-outline'
                  color='#777'
                  size={14}
                />
                <Text style={styles.textExtra}>{item?.tempo}</Text>
                <MaterialCommunityIcons
                  name='fire'
                  color='#777'
                  size={14}
                  style={{ marginLeft: 6 }}
                />
                <Text style={styles.textExtra}>{item?.kcal} kcal</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* MODAL DETALHES */}
      <Modal visible={modalVisible} animationType='slide' transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitulo}>{receitaSelecionada?.titulo}</Text>
            <View style={styles.infoExtras}>
              <MaterialCommunityIcons
                name='clock-outline'
                color='#777'
                size={16}
              />
              <Text style={styles.textExtra}>{receitaSelecionada?.tempo}</Text>
              <MaterialCommunityIcons
                name='fire'
                color='#777'
                size={16}
                style={{ marginLeft: 8 }}
              />
              <Text style={styles.textExtra}>
                {receitaSelecionada?.kcal} kcal
              </Text>
            </View>
            <ScrollView style={{ marginTop: 10 }}>
              <Text style={styles.modalDescricao}>
                {receitaSelecionada?.descricao}
              </Text>
            </ScrollView>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.botaoFechar}
            >
              <Text style={styles.textoFechar}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </LinearGradient>
  )
}
