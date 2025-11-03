import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  ctaContainer: {
    borderRadius: 24,
    paddingVertical: 24,
    paddingHorizontal: 20,
    marginVertical: 24,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2E8B57',
    marginBottom: 6,
    fontFamily: 'Inter_600SemiBold',
  },
  subtitle: {
    fontSize: 14,
    color: '#276678',
    marginBottom: 16,
    fontFamily: 'Inter_400Regular',
  },
  button: {
    backgroundColor: '#2E8B57',
    alignSelf: 'flex-start',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 18,
    shadowColor: '#2E8B57',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Inter_600SemiBold',
  },
  image: {
    width: 90,
    height: 90,
    marginLeft: 10,
  },
});
