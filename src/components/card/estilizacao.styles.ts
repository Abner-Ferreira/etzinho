import { Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')

/* largura/altura dos cards calculada a partir da tela */
const CARD_WIDTH = Math.min(360, Math.max(150, Math.round(width * 0.52)))
const CARD_HEIGHT = Math.round(CARD_WIDTH * 0.68)


export const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 16,
    marginRight: 16,
    padding: 14,
    justifyContent: 'center',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  cardText: {
    flexShrink: 1,
    fontSize: 16,
    color: '#6E7C91',
    lineHeight: 20,
    fontFamily: 'Inter_400Regular',
  },
})
