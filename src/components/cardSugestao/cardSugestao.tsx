import { View, Text, Pressable, Animated } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState, useEffect, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ConfettiCannon from 'react-native-confetti-cannon';
import Toast from '@/src/components/customToast'; // importe seu novo toast
import { useSugestaoHora } from '@/src/hooks/useSugestaoDia';
import { styles } from './estilizacao.styles';

export default function SugestaoDiariaCard() {
  const sugestao = useSugestaoHora();
  const [checked, setChecked] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const scale = useRef(new Animated.Value(0)).current;
  const [timeLeft, setTimeLeft] = useState<string>('');

  useEffect(() => {
    const loadFeita = async () => {
      if (!sugestao) return;
      const hora = new Date().toDateString() + '-' + new Date().getHours();
      const data = await AsyncStorage.getItem('sugestoesFeitasHora');
      const feitas = data ? JSON.parse(data) : {};
      setChecked(feitas[hora]?.includes(sugestao.id) || false);
    };
    loadFeita();
  }, [sugestao]);

  useEffect(() => {
    if (checked) {
      Animated.spring(scale, { toValue: 1, friction: 5, useNativeDriver: true }).start();
    } else {
      scale.setValue(0);
    }
  }, [checked]);

  useEffect(() => {
    const updateTimeLeft = () => {
      const now = new Date();
      const nextHour = new Date();
      nextHour.setMinutes(0, 0, 0);
      nextHour.setHours(now.getHours() + 1);
      const diff = nextHour.getTime() - now.getTime();
      const minutes = Math.floor(diff / 60000);
      const seconds = Math.floor((diff % 60000) / 1000);
      setTimeLeft(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
    };

    updateTimeLeft();
    const interval = setInterval(updateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [sugestao]);

  const toggleSugestao = async () => {
    if (!sugestao) return;
    const hora = new Date().toDateString() + '-' + new Date().getHours();
    const data = await AsyncStorage.getItem('sugestoesFeitasHora');
    const feitas = data ? JSON.parse(data) : {};
    if (!feitas[hora]) feitas[hora] = [];

    // ✅ Quando marca como feita
    if (!checked) {
      feitas[hora].push(sugestao.id);
      await AsyncStorage.setItem('sugestoesFeitasHora', JSON.stringify(feitas));
      setChecked(true);
      setShowConfetti(true);

      Toast.show({
        type: 'success',
        text1: 'Parabéns! 🎉',
        text2: 'Você conseguiu! Volte na próxima hora para a nova sugestão.',
      });
      return;
    }

    // ⚙️ Quando já está marcada e o usuário quer desmarcar
   Toast.show({
  type: 'info',
  text1: 'Cancelar progresso?',
  text2: 'Deseja cancelar esta sugestão feita?',
  props: {
    onPressYes: async () => {
      feitas[hora] = feitas[hora].filter((id: number) => id !== sugestao.id);
      await AsyncStorage.setItem('sugestoesFeitasHora', JSON.stringify(feitas));
      setChecked(false);
      Toast.hide();

      Toast.show({
        type: 'success',
        text1: 'Sugestão desmarcada',
        text2: 'Você pode refazer esta sugestão a qualquer momento.',
      });
    },
    onPressNo: () => Toast.hide(),
  },
});
  };

  if (!sugestao) return null;

  return (
    <View style={styles.containerCard}>
      <Text style={styles.textoSessao}>Sugestão diária</Text>

      <Pressable
        key={sugestao.id}
        onPress={toggleSugestao}
        accessibilityRole="button"
        accessibilityLabel="Marcar sugestão diária como feita"
        style={({ pressed }) => [pressed && { transform: [{ scale: 0.995 }], opacity: 0.96 }]}
      >
        <View style={[styles.conteudoCardContainer, checked && styles.concluidoCardContainer]}>
          <View style={styles.conteudoCard}>
            <Text style={[styles.tituloCard, checked && styles.concluidoTituloCard]}>
              {sugestao.titulo}
            </Text>
            <Text style={[styles.objetivoCard, checked && styles.concluidoObjetivoCard]}>
              {sugestao.subtitulo}
            </Text>
            <Text style={styles.concluidoMensagem}>Próxima sugestão em: {timeLeft}</Text>
          </View>

          <Animated.View style={{ transform: [{ scale }] }}>
            <MaterialCommunityIcons
              name="check-circle"
              size={32}
              color={checked ? '#1ab394' : '#1ab39447'}
            />
          </Animated.View>
        </View>
      </Pressable>

      {showConfetti && (
        <ConfettiCannon
          count={400}
          origin={{ x: -40, y: 0 }}
          fadeOut
          fallSpeed={4500}
          explosionSpeed={140}
          autoStart
          onAnimationEnd={() => setShowConfetti(false)}
        />
      )}
    </View>
  );
}
