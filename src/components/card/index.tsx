import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Pressable, View, Text } from 'react-native'
import { styles } from './estilizacao.styles'

type IconName =
  | 'book-education'
  | 'meditation'
  | 'movie-open-outline'
  | 'food-variant'

interface Card {
  id: number
  title: string
  color: string
  route: string
  icon: IconName
}

export default function Cards() {
  const cards: Card[] = [
    {
      id: 1,
      title: 'Aprenda Algo Novo',
      color: '#E6F7F8',
      route: 'conhecimento/index',
      icon: 'book-education',
    },
    {
      id: 2,
      title: 'Respire & Equilibre',
      color: '#EEE8FC',
      route: 'meditacao/index',
      icon: 'meditation',
    },
    {
      id: 3,
      title: 'Tempo de Descontrair',
      color: '#E6F7F8',
      route: 'entretenimento/index',
      icon: 'movie-open-outline',
    },
    {
      id: 4,
      title: 'Receitas que Cuidam',
      color: '#EEE8FC',
      route: 'receitas/index',
      icon: 'food-variant',
    },
  ]

  const navigation = useNavigation()

  const handleNavigate = (route: string) => {
    navigation.navigate(route as never) // navegação para a tela correspondente
  }

  return (
    <>
      {cards.map(card => (
        <Pressable
          key={card.id}
          onPress={() => handleNavigate(card.route)}
          accessibilityRole='button'
          accessibilityLabel={`Abrir ${card.title}`}
          style={({ pressed }) => [
            styles.card,
            { backgroundColor: card.color },
            pressed && { transform: [{ scale: 0.995 }], opacity: 0.96 },
          ]}
        >
          <View style={styles.cardHeader}>
            <View style={styles.iconWrapper}>
              <MaterialCommunityIcons
                name={card.icon}
                size={22}
                color='#0F1724'
              />
            </View>

            <Text style={styles.cardText}>{card.title}</Text>
          </View>
        </Pressable>
      ))}
    </>
  )
}
