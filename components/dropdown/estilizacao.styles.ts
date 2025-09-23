import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
   container: {
    marginHorizontal: 16,
  },
  menuHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  menuText: {
    color: '#1ab394',
    fontSize: 14,
    fontWeight: '600',
  },
  dropdown: {
    backgroundColor: '#fff',
    marginTop: 6,
    borderRadius: 8,
    elevation: 2,
  },
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  itemText: {
    fontSize: 14,
    color: '#6E7C91',
  },
})