import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  gradient: { flex: 1 },
  container: { flex: 1 },
  etContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  etzinho: { width: 180, height: 180 },
  chatContainer: { flex: 2, paddingHorizontal: 16, paddingBottom: 12 },

  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: 4,
  },
  userContainer: { justifyContent: 'flex-end' },
  botContainer: { justifyContent: 'flex-start' },

  bubble: {
    maxWidth: '80%',
    padding: 14,
    borderRadius: 16,
    marginHorizontal: 4,
  },
  userBubble: { backgroundColor: '#b1d8d3', borderBottomRightRadius: 0 },
  botBubble: { backgroundColor: '#c1eee9ff', borderBottomLeftRadius: 0 },

  bubbleText: { color: '#6E7C91', fontSize: 15, lineHeight: 20 },

  linkText: {
    color: '#007AFF',
    textDecorationLine: 'underline',
  },

  avatar: { width: 32, height: 32, marginTop: 6, borderRadius: 16 },

  inputArea: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#000',
    fontWeight: '600',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 44,
  },
  sendButton: {
    backgroundColor: '#2E8B57',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginLeft: 8,
    height: 44,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
