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

// imagens das receitas café da manhã
import imgPanqueca from '@/src/assets/images/receitas/panqueca-de-banana-com-aveia.webp'
import imgPaoComOvo from '@/src/assets/images/receitas/pao-com-ovo-e-tomate.jpg'
import imgVitamina from '@/src/assets/images/receitas/vitamina-de-frutas.jpg'
// imagens das receitas almoço
import imgBatataDoce from '@/src/assets/images/receitas/batata-doce-e-frango.jpg'
import imgMacarrao from '@/src/assets/images/receitas/macarrao-alho-e-oleo-e-couve.jpg'
import imgOmelete from '@/src/assets/images/receitas/omelete-de-legumes.jpg'
// imagens das receitas janta
import imgSanduiche from '@/src/assets/images/receitas/sanduiche-natural.jpg'
import imgSopa from '@/src/assets/images/receitas/sopa-de-legumes.jpg'
import imgTapioca from '@/src/assets/images/receitas/tapioca-de-queijo-com-tomate.jpg'
// imagens das receitas lanches
import imgFrutaComIogurte from '@/src/assets/images/receitas/fruta-com-iogurte.jpg'
import imgGelatina from '@/src/assets/images/receitas/gelatina-cremosa.jpeg'
import imgPipoca from '@/src/assets/images/receitas/pipoca.jpeg'

const receitas = [
  {
    id: 1,
    categoria: 'Café da Manhã',
    titulo: 'Panqueca de aveia e banana',
    imagem: imgPanqueca,
    tempo: '15 min',
    kcal: 250,
    descricao:
      '- 1 banana amassada + 1 ovo + 1 pitada de fermento + 2 colheres de aveia → misturar e colocar na frigideira untada.\nDá energia e é super simples.',
  },
  {
    id: 2,
    categoria: 'Café da Manhã',
    titulo: 'Pão com ovo mexido e tomate',
    imagem: imgPaoComOvo,
    tempo: '5 min',
    kcal: 220,
    descricao:
      '- Pão ou torrada, ovo mexido e rodelas de tomate.\nMuito nutritivo e pronto em 5min.',
  },
  {
    id: 3,
    categoria: 'Café da Manhã',
    titulo: 'Vitamina de fruta',
    imagem: imgVitamina,
    tempo: '10 min',
    kcal: 180,
    descricao:
      '- Mamão, banana ou abacate + leite + 1 colher de aveia.\nRefrescante e alimenta bem.',
  },
  {
    id: 4,
    categoria: 'Almoço',
    titulo: 'Omelete de legumes',
    imagem: imgOmelete,
    tempo: '10 min',
    kcal: 210,
    descricao:
      '- Ovos batidos + legumes picados (tomate, cebola, cenoura).\nPode ser feito em 10min.',
  },
  {
    id: 5,
    categoria: 'Almoço',
    titulo: 'Batata-doce assada com frango',
    imagem: imgBatataDoce,
    tempo: '25 min',
    kcal: 320,
    descricao:
      '- Cozinhar ou assar batata-doce.\n- Rechear com frango ou queijo.\nMuito nutritivo e fácil.',
  },
  {
    id: 6,
    categoria: 'Almoço',
    titulo: 'Macarrão alho e óleo',
    imagem: imgMacarrao,
    tempo: '12 min',
    kcal: 290,
    descricao:
      '- Cozinhar o macarrão + fritar alho com óleo e couve.\nRápido e saboroso!',
  },
  {
    id: 7,
    categoria: 'Jantar',
    titulo: 'Sopa de legumes simples',
    imagem: imgSopa,
    tempo: '20 min',
    kcal: 180,
    descricao:
      '- Cozinhar batata, cenoura e abóbora com caldo.\nBater no liquidificador. Leve e prática.',
  },
  {
    id: 8,
    categoria: 'Jantar',
    titulo: 'Tapioca com queijo e tomate',
    imagem: imgTapioca,
    tempo: '8 min',
    kcal: 230,
    descricao: '- Massa de tapioca pronta + queijo e tomate.\nLeve e rápida!',
  },
  {
    id: 9,
    categoria: 'Jantar',
    titulo: 'Sanduíche natural',
    imagem: imgSanduiche,
    tempo: '7 min',
    kcal: 260,
    descricao:
      '- Pão + frango desfiado + alface + cenoura ralada.\nFácil e nutritivo.',
  },
  {
    id: 10,
    categoria: 'Lanches rápidos',
    titulo: 'Pipoca doce ou salgada',
    imagem: imgPipoca,
    tempo: '10 min',
    kcal: 190,
    descricao:
      '- Milho + óleo + panela.\nPara o caramelo: açúcar + água + pitada de sal.',
  },
  {
    id: 11,
    categoria: 'Lanches rápidos',
    titulo: 'Fruta com iogurte',
    imagem: imgFrutaComIogurte,
    tempo: '5 min',
    kcal: 160,
    descricao:
      '- Banana, mamão ou maçã com iogurte.\nCongelar o iogurte levemente fica ótimo!',
  },
  {
    id: 12,
    categoria: 'Lanches rápidos',
    titulo: 'Gelatina cremosa',
    imagem: imgGelatina,
    tempo: '15 min',
    kcal: 140,
    descricao: '- Gelatina batida com leite.\nFica muito mais saborosa!',
  },
]

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
