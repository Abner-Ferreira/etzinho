import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  logo: {
    width: width * 0.5,
    height: 80,
    alignSelf: 'center',
    marginBottom: 40,
  },
  label: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 16,
    fontSize: 14,
  },
  input: {
    height: 40,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    color: '#fff',
    fontSize: 16,
    paddingVertical: 4,
  },
  loginButton: {
    marginTop: 32,
    backgroundColor: '#fff',
    paddingVertical: 14,
    borderRadius: 4,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#1ab394',
    fontWeight: 'bold',
    fontSize: 16,
  },
  forgotText: {
    marginTop: 16,
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#fff',
  },
  orText: {
    marginHorizontal: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
  createAccountButton: {
    flexDirection: 'row',
    backgroundColor: '#1ab394',
    paddingVertical: 14,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createAccountText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  backButton: {
  position: 'absolute',
  top: 50, 
  left: 20,
  zIndex: 10,
  backgroundColor: 'rgba(0,0,0,0.4)',
  borderRadius: 25,
  padding: 6,
},
});