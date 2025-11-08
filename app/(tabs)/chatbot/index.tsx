import etzinhoChatbot from '@/src/assets/images/etzinho-chatbot.png'
import { sendMessageToChatbot } from '@/src/services/chatbot'
import { styles } from '@/src/styles/chatbot.styles'
import { LinearGradient } from 'expo-linear-gradient'
import { useEffect, useState } from 'react'
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Linking,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

function TextoComLink({ text }: { text: string }) {
  const regexLink = /\[([^\]]+)\]\(([^)]+)\)/g
  const parts: (string | { label: string; url: string })[] = []
  let lastIndex = 0
  let match

  while ((match = regexLink.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index))
    }
    parts.push({ label: match[1], url: match[2] })
    lastIndex = regexLink.lastIndex
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex))
  }

  return (
    <Text style={styles.bubbleText}>
      {parts.map((part, index) =>
        typeof part === 'string' ? (
          <Text key={index}>{part}</Text>
        ) : (
          <Text
            key={index}
            style={styles.linkText}
            onPress={() => Linking.openURL(part.url)}
          >
            {part.label}
          </Text>
        )
      )}
    </Text>
  )
}

export default function ChatScreen() {
  const [messages, setMessages] = useState<
    { id: string; from: 'user' | 'bot'; text: string }[]
  >([])
  const [input, setInput] = useState('')
  const [isTalking, setIsTalking] = useState(false)

  const WELCOME_MESSAGE =
    'Oi, eu sou o Etzinho. 💚\nQue bom ter você aqui. Como você está?'

  useEffect(() => {
    setMessages([
      { id: Date.now().toString(), from: 'bot', text: WELCOME_MESSAGE },
    ])
  }, [])

  async function handleSend() {
    if (!input.trim()) return

    const newMessage = {
      id: Date.now().toString(),
      from: 'user' as const,
      text: input,
    }
    const updatedMessages = [...messages, newMessage]
    setMessages(updatedMessages)
    setInput('')

    const botMessage = {
      id: (Date.now() + 1).toString(),
      from: 'bot' as const,
      text: '',
    }
    setMessages(prev => [...prev, botMessage])
    setIsTalking(true)

    const fullReply = await sendMessageToChatbot(updatedMessages)

    let displayed = ''
    const words = fullReply.split(' ')
    for (let i = 0; i < words.length; i++) {
      displayed += words[i] + ' '
      setMessages(prev =>
        prev.map(msg =>
          msg.id === botMessage.id ? { ...msg, text: displayed.trim() } : msg
        )
      )
      await new Promise(res => setTimeout(res, 80))
    }

    setIsTalking(false)
  }

  return (
    <LinearGradient colors={['#d4f1e6', '#e9f9f5']} style={styles.gradient}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}
      >
        {/* Área do ETzinho */}
        <View style={styles.etContainer}>
          <Image
            source={etzinhoChatbot}
            style={styles.etzinho}
            resizeMode='contain'
          />
        </View>

        {/* Área do chat */}
        <View style={styles.chatContainer}>
          <FlatList
            data={messages}
            keyExtractor={(_, i) => i.toString()}
            renderItem={({ item }) => (
              <View
                style={[
                  styles.messageContainer,
                  item.from === 'user'
                    ? styles.userContainer
                    : styles.botContainer,
                ]}
              >
                {item.from === 'bot' && (
                  <Image
                    source={etzinhoChatbot}
                    style={styles.avatar}
                    resizeMode='contain'
                  />
                )}
                <View
                  style={[
                    styles.bubble,
                    item.from === 'user' ? styles.userBubble : styles.botBubble,
                  ]}
                >
                  <TextoComLink text={item.text} />
                </View>
              </View>
            )}
          />

          {/* Campo de input */}
          <View style={styles.inputArea}>
            <TextInput
              style={styles.input}
              value={input}
              onChangeText={setInput}
              placeholder='Fale com o ETzinho...'
              placeholderTextColor='#999'
              autoCapitalize='sentences'
            />
            <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
              <Text style={{ color: 'white', fontWeight: '600' }}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  )
}
