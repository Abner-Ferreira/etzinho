import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Pressable, View, Text } from 'react-native'
import { styles } from './estilizacao.styles'

type IconName =
  | 'head-lightbulb'
  | 'meditation'
  | 'book-open-page-variant'
  | 'food-variant'
  | 'run'

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
      title: 'Informações de saúde',
      color: '#CDEFF0',
      route: 'conhecimento/index',
      icon: 'head-lightbulb',
    },
    {
      id: 2,
      title: 'Exercite-se em casa',
      color: '#EEE8FC',
      route: 'meditacao/index',
      icon: 'run',
    },
    {
      id: 3,
      title: 'Momento de lazer',
      color: '#CDEFF0',
      route: 'entretenimento/index',
      icon: 'book-open-page-variant',
    },
    {
      id: 4,
      title: 'Receitas que cuidam',
      color: '#EEE8FC',
      route: 'receitas/index',
      icon: 'food-variant',
    },
  ]

  const navigation = useNavigation()

  const handleNavigate = (route: string) => {
    navigation.navigate(route as never) 
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
