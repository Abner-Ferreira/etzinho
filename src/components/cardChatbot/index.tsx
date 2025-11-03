import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { styles } from '@/src/styles/cardChat.styles';
import logo from '@/src/assets/images/logo.png' 

export default function ChatbotCTA() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('chatbot/index' as never);
  };

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={handlePress}>
      <LinearGradient
        colors={['#B2FCCA', '#A8E6CF', '#E0F7FA']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.ctaContainer}
      >
        <View style={styles.textContainer}>
          <Text style={styles.title}>Converse com o Etzinho 👽</Text>
          <Text style={styles.subtitle}>Seu parceiro para cuidar da mente e do corpo.</Text>

          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>💬 Abrir Chat</Text>
          </TouchableOpacity>
        </View>

        <Image
          source={logo} 
          style={styles.image}
          resizeMode="contain"
        />
      </LinearGradient>
    </TouchableOpacity>
  );
}
