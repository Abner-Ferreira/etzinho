import { Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')


export const styles = StyleSheet.create({
   card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: width * 0.9,
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1ab394',
    marginBottom: 8,
  },
  label: {
    fontWeight: '600',
    marginTop: 8,
    color: '#1ab394',
  },
  text: {
    fontSize: 15,
    color: '#6E7C91',
    marginTop: 4,
    lineHeight: 22,
  },
})