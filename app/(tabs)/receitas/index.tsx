import DropdownMenu from '@/src/components/dropdown/dropdown'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { styles } from '../../../src/styles/receitas.styles'

// imagens das receitas café da manhã
import imgPanqueca from '../../../src/assets/images/receitas/panqueca-de-banana-com-aveia.webp'
import imgPaoComOvo from '../../../src/assets/images/receitas/pao-com-ovo-e-tomate.jpg'
import imgVitamina from '../../../src/assets/images/receitas/vitamina-de-frutas.jpg'
// imagens das receitas almoço
import imgBatataDoce from '../../../src/assets/images/receitas/batata-doce-e-frango.jpg'
import imgMacarrao from '../../../src/assets/images/receitas/macarrao-alho-e-oleo-e-couve.jpg'
import imgOmelete from '../../../src/assets/images/receitas/omelete-de-legumes.jpg'
// imagens das receitas janta
import imgSanduiche from '../../../src/assets/images/receitas/sanduiche-natural.jpg'
import imgSopa from '../../../src/assets/images/receitas/sopa-de-legumes.jpg'
import imgTapioca from '../../../src/assets/images/receitas/tapioca-de-queijo-com-tomate.jpg'
// imagens das receitas lanchinhos rápidos
import imgFrutaComIogurte from '../../../src/assets/images/receitas/fruta-com-iogurte.jpg'
import imgGelatina from '../../../src/assets/images/receitas/gelatina-cremosa.jpeg'
import imgPipoca from '../../../src/assets/images/receitas/pipoca.jpeg'

export default function Receitas() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('')

  const receitas = [
    {
      id: 1,
      categoria: 'Café da Manhã',
      titulo: 'Panqueca de aveia e banana',
      imagem: imgPanqueca,
      descricao:
        '- 1 banana amassada + 1 ovo + 1 pitada de fermento + 2 colheres de aveia → misturar e colocar na frigideira untada. \nDá energia e é super simples.',
    },
    {
      id: 2,
      categoria: 'Café da Manhã',
      titulo: 'Pão com ovo mexido e tomate',
      imagem: imgPaoComOvo,
      descricao:
        '- Pão ou torrada, ovo mexido e rodelas de tomate. \nMuito nutritivo e pronto em 5min.',
    },
    {
      id: 3,
      categoria: 'Café da Manhã',
      titulo: 'Vitamina de fruta',
      imagem: imgVitamina,
      descricao:
        '- Mamão, banana ou abacate + leite + 1 colher de aveia. \nRefrescante e alimenta bem.',
    },
    {
      id: 4,
      categoria: 'Almoço',
      titulo: 'Omelete de legumes',
      imagem: imgOmelete,
      descricao:
        '- Ovos batidos + legumes de preferência ralados ou picados (tomate, cebola, batata, cenoura ralada). \nPode ser feito em 10min.',
    },
    {
      id: 5,
      categoria: 'Almoço',
      titulo: 'Batata-doce assada com frango desfiado',
      imagem: imgBatataDoce,
      descricao:
        '- Cozinhar ou assar batata-doce\n(Dica: no micro-ondas fica pronto em 8min: lavar, furar batata com garfo, micro-ondas 6-10min em potência alta, virar na metade; pronto quando o garfo entrar fácil). \n- Rechear com frango, carne, queijo, peixe, desfiado temperado. \nMuito nutritivo e fácil.',
    },
    {
      id: 6,
      categoria: 'Almoço',
      titulo: 'Macarrão alho e óleo com couve refogada',
      imagem: imgMacarrao,
      descricao:
      '- Cozinhar o macarrão por 8min + fritar alho em uma panela com pouco óleo + adicionar couve até reduzir de tamanho. Molho opcional.\nRápido e saciante',
    },
    {
      id: 7,
      categoria: 'Jantar',
      titulo: 'Sopa de legumes simples',
      imagem: imgSopa,
      descricao:
      '- Cozinhar batata, cenoura e abóbora com caldo e temperos → bater tudo no liquidificador. \n(Pode render vários dias, armazenar em potes no congelador)'
    },
    {
      id: 8,
      categoria: 'Jantar',
      titulo: 'Tapioca com queijo e tomate',
      imagem: imgTapioca,
      descricao:
      '- Massa de tapioca pronta (vende no mercado) + recheio de queijo e tomate. \nLeve e muito rápida.'
    },
    {
      id: 9,
      categoria: 'Jantar',
      titulo: 'Sanduíche natural',
      imagem: imgSanduiche,
      descricao:
      '- Pão + frango desfiado ou proteína enlatada + alface + cenoura ralada. \nFácil de montar e nutritivo'
    },
    {
      id: 10,
      categoria: 'Lanches rápidos',
      titulo: 'Pipoca doce ou salgada',
      imagem: imgPipoca,
      descricao:
      '- Milho de pipoca + panela grande + fogo médio + uma colher de óleo a cada 2 colheres de pipoca. Reduzir fogo quando os estouros diminuirem 50%. \n- Para o caramelo, 3 colheres de açucar a cada 1 de água + pitada de sal + mexer em panela até atingir coloração dourada. Despejar sobre a pipoca.'
    },
    {
      id: 11,
      categoria: 'Lanches rápidos',
      titulo: 'Fruta com iogurte',
      imagem: imgFrutaComIogurte,
      descricao:
      '- Banana, mamão ou maçã picada com iogurte. \nCongelar o iogurte levemente antes deixa tudo melhor!'
    },
    {
      id: 12,
      categoria: 'Lanches rápidos',
      titulo: 'Gelatina cremosa',
      imagem: imgGelatina,
      descricao:
      '- Gelatina de preferência batida com leite ao invés de água (seguir indicação da embalagem). \nO leite deixa a gelatina muito mais saborosa!'
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
