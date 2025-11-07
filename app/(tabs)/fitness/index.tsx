import { styles } from '@/src/styles/fitness.styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import {
  ImageBackground,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { WebView } from 'react-native-webview'

type CategoriaKey =
  | 'Yoga & Zen'
  | 'HIIT'
  | 'Força'
  | 'Pilates'
  | 'Alongamento'
  | 'Recuperação Ativa'

type CategoriaOuMais = CategoriaKey | 'Mais'

export default function Fitness() {
  const [categoria, setCategoria] = useState<CategoriaKey>('Yoga & Zen')
  const [modalVisible, setModalVisible] = useState(false)
  const [videoUrl, setVideoUrl] = useState<string | null>(null)

  const categorias: CategoriaOuMais[] = ['Yoga & Zen', 'HIIT', 'Força', 'Mais']

  const conteudo: Record<
    CategoriaKey,
    {
      titulo: string
      icone: keyof typeof MaterialCommunityIcons.glyphMap
      botao: string
      imagem: string
      secoes: {
        title: string
        time: string
        thumbnail: string
        video: string,
        videoEmbedado: string,
      }[]
    }
  > = {
    'Yoga & Zen': {
      titulo: 'Yoga matinal: 15 Minutos',
      icone: 'spa',
      botao: 'Começar agora',
      imagem:
        'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=800&q=80',
      secoes: [
        {
          title: 'Alívio rápido do stress',
          time: '10 min',
          thumbnail:
            'https://plus.unsplash.com/premium_photo-1665203618989-e04554a539b1?auto=format&fit=crop&q=80&w=800',
          video: 'https://www.youtube.com/watch?v=-nffHYav4Ac',
          videoEmbedado: 'https://www.youtube.com/embed/-nffHYav4Ac'
        },
        {
          title: 'Respiração consciente',
          time: '15 min',
          thumbnail:
            'https://images.unsplash.com/photo-1591343395902-1adcb454c4e2?auto=format&fit=crop&q=80&w=800',
          video: 'https://www.youtube.com/watch?v=OvY0XFQUS4U',
          videoEmbedado: 'https://www.youtube.com/embed/OvY0XFQUS4U'
        },
        {
          title: 'Yoga noturno restaurativo',
          time: '24 min',
          thumbnail:
            'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
          video: 'https://www.youtube.com/watch?v=7r6_XMprzEY',
          videoEmbedado: 'https://www.youtube.com/embed/7r6_XMprzEY'
        },
      ],
    },
    HIIT: {
      titulo: 'HIIT power: 12 minutos',
      icone: 'lightning-bolt',
      botao: 'Queimar calorias',
      imagem:
        'https://plus.unsplash.com/premium_photo-1664910207555-fac63513e7ad?auto=format&fit=crop&w=800&q=80',
      secoes: [
        {
          title: 'HIIT leve',
          time: '8 min',
          thumbnail:
            'https://images.unsplash.com/photo-1609096458733-95b38583ac4e?auto=format&fit=crop&q=80&w=800',
          video: 'https://www.youtube.com/watch?v=mfae8Vxa2Wo',
          videoEmbedado: 'https://www.youtube.com/embed/mfae8Vxa2Wo'
        },
        {
          title: 'HIIT intenso',
          time: '20 min',
          thumbnail:
            'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80&w=800',
          video: 'https://www.youtube.com/watch?v=_WdUkEriE20',
          videoEmbedado: 'https://www.youtube.com/embed/_WdUkEriE20'
        },
      ],
    },
    Força: {
      titulo: 'Treino de força: pernas e glúteos',
      icone: 'dumbbell',
      botao: 'Treinar agora',
      imagem:
        'https://plus.unsplash.com/premium_photo-1661265933107-85a5dbd815af?auto=format&fit=crop&w=800&q=80',
      secoes: [
        {
          title: 'Treino completo',
          time: '20 min',
          thumbnail:
            'https://images.unsplash.com/photo-1570440828860-44258b18caa7?auto=format&fit=crop&q=80&w=800',
          video: 'https://www.youtube.com/watch?v=XxVL-JlU18A',
          videoEmbedado: 'https://www.youtube.com/embed/XxVL-JlU18A'
        },
        {
          title: 'Pernas e abdômen fortes',
          time: '12 min',
          thumbnail:
            'https://plus.unsplash.com/premium_photo-1664478159939-5242198cdcb5?auto=format&fit=crop&q=80&w=800',
          video: 'https://www.youtube.com/watch?v=Mj4rkX3pwRY',
          videoEmbedado: 'https://www.youtube.com/embed/Mj4rkX3pwRY'
        },
      ],
    },
    Pilates: {
      titulo: 'Pilates suave: 20 minutos',
      icone: 'yoga',
      botao: 'Iniciar sessão',
      imagem:
        'https://plus.unsplash.com/premium_photo-1737321091196-721f11e47ede?auto=format&fit=crop&w=800&q=80',
      secoes: [
        {
          title: 'Pilates para iniciantes',
          time: '10 min',
          thumbnail:
            'https://images.unsplash.com/photo-1614634053434-1729f6ac6bd6?auto=format&fit=crop&q=80&w=800',
          video: 'https://www.youtube.com/watch?v=u3UjeyPOjoU',
          videoEmbedado: 'https://www.youtube.com/embed/u3UjeyPOjoU'
        },
        {
          title: 'Pilates focado no core',
          time: '12 min',
          thumbnail:
            'https://plus.unsplash.com/premium_photo-1698091420446-713271203f69?auto=format&fit=crop&q=80&w=800',
          video: 'https://www.youtube.com/watch?v=K2EumjZ68nU',
          videoEmbedado: 'https://www.youtube.com/embed/K2EumjZ68nU'
        },
        {
          title: 'Alongamento de corpo inteiro',
          time: '8 min',
          thumbnail:
            'https://images.unsplash.com/photo-1683056255281-e52a141924f0?auto=format&fit=crop&q=80&w=800',
          video: 'https://www.youtube.com/watch?v=hpyT2v04Bj0',
          videoEmbedado: 'https://www.youtube.com/embed/hpyT2v04Bj0'
        },
      ],
    },
    Alongamento: {
      titulo: 'Alongamento relaxante: 10 min',
      icone: 'human-handsup',
      botao: 'Começar agora',
      imagem:
        'https://images.unsplash.com/photo-1562771379-eafdca7a02f8?auto=format&fit=crop&w=800&q=80',
      secoes: [
        {
          title: 'Alongamento matinal',
          time: '3 min',
          thumbnail:
            'https://images.unsplash.com/photo-1607914660217-754fdd90041d?auto=format&fit=crop&q=80&w=800',
          video: 'https://www.youtube.com/watch?v=qrpxaI1k27M',
          videoEmbedado: 'https://www.youtube.com/embed/qrpxaI1k27M'
        },
        {
          title: 'Alongamento para flexibilidade',
          time: '11 min',
          thumbnail:
            'https://images.unsplash.com/photo-1683056255281-e52a141924f0?auto=format&fit=crop&q=80&w=800',
          video: 'https://www.youtube.com/watch?v=dwJKxbZM46Y',
          videoEmbedado: 'https://www.youtube.com/embed/dwJKxbZM46Y'
        },
      ],
    },
    'Recuperação Ativa': {
      titulo: 'Recuperação ativa: corpo e mente',
      icone: 'meditation',
      botao: 'Relaxar agora',
      imagem:
        'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80',
      secoes: [
        {
          title: 'Relaxamento pós-treino',
          time: '6 min',
          thumbnail:
            'https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=800',
          video: 'https://www.youtube.com/watch?v=1TpRw9iwW9k',
          videoEmbedado: 'https://www.youtube.com/embed/1TpRw9iwW9k'
        },
        {
          title: 'Alongamento leve para recuperação',
          time: '8 min',
          thumbnail:
            'https://plus.unsplash.com/premium_photo-1663099952371-b1dec92323e0?auto=format&fit=crop&q=80&w=800',
          video: 'https://www.youtube.com/watch?v=cvhQkEjB--o',
          videoEmbedado: 'https://www.youtube.com/embed/cvhQkEjB--o'
        },
      ],
    },
  }

  const atual = conteudo[categoria]

  return (
    <LinearGradient colors={['#d4f1e6', '#e9f9f5']} style={styles.gradient}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Filtros */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoriasContainer}
          contentContainerStyle={{ paddingHorizontal: 12 }}
        >
          {categorias.map(item => (
            <TouchableOpacity
              key={item}
              onPress={() =>
                item === 'Mais' ? setModalVisible(true) : setCategoria(item)
              }
              style={[
                styles.categoriaTag,
                categoria === item && styles.categoriaAtiva,
                item === 'Mais' &&
                  ['Pilates', 'Alongamento', 'Recuperação Ativa'].includes(
                    categoria
                  ) &&
                  styles.categoriaAtiva,
              ]}
            >
              <Text
                style={[
                  styles.categoriaTexto,
                  categoria === item && styles.categoriaTextoAtivo,
                  item === 'Mais' &&
                    ['Pilates', 'Alongamento', 'Recuperação Ativa'].includes(
                      categoria
                    ) &&
                    styles.categoriaTextoAtivo,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Treino principal */}
        <View style={styles.suggestedWorkout}>
          <ImageBackground
            source={{ uri: atual.imagem }}
            style={styles.suggestedImage}
          >
            <LinearGradient
              colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.2)']}
              style={styles.overlay}
            />
          </ImageBackground>
          <View style={styles.suggestedTextContainer}>
            <Text style={styles.suggestedTitle}>{atual.titulo}</Text>
            <TouchableOpacity style={styles.suggestedButton}>
              <Text style={styles.suggestedButtonText}>{atual.botao}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Sessões rápidas */}
        {atual.secoes.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>Sessões Rápidas</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {atual.secoes.map((item, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => {
                    if(Platform.OS ===  'web') return setVideoUrl(item.videoEmbedado)
                    setVideoUrl(item.video)

                  }
                  }
                  style={styles.quickCard}
                >
                  <ImageBackground
                    source={{ uri: item.thumbnail }}
                    style={styles.quickImage}
                  >
                    <LinearGradient
                      colors={['rgba(0,0,0,0.5)', 'transparent']}
                      style={styles.quickOverlay}
                    >
                      <MaterialCommunityIcons
                        name='play-circle-outline'
                        size={38}
                        color='#fff'
                      />
                      <Text style={styles.quickCardTitle}>{item.title}</Text>
                      <Text style={styles.quickCardTime}>{item.time}</Text>
                    </LinearGradient>
                  </ImageBackground>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </>
        )}

        {/* Desafios */}
        <Text style={styles.sectionTitle}>Novos desafios</Text>
        <View style={styles.challengeContainer}>
          {[
            {
              title: 'Desafio cardio 7 dias',
              subtitle: 'Perda de peso rápida',
              image:
                'https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=800',
              progress: '3/7 dias',
            },
            {
              title: 'Força total 30 dias',
              image:
                'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&q=80&w=800',
            },
          ].map((challenge, i) => (
            <ImageBackground
              key={i}
              source={{ uri: challenge.image }}
              style={styles.challengeCard}
              imageStyle={{ borderRadius: 16 }}
            >
              <LinearGradient
                colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.2)']}
                style={styles.challengeOverlay}
              >
                <Text style={styles.challengeTitle}>{challenge.title}</Text>
                {challenge.subtitle && (
                  <Text style={styles.challengeSubtitle}>
                    {challenge.subtitle}
                  </Text>
                )}
                {challenge.progress && (
                  <View style={styles.challengeProgress}>
                    <Text style={styles.challengeProgressText}>
                      {challenge.progress}
                    </Text>
                  </View>
                )}
              </LinearGradient>
            </ImageBackground>
          ))}
        </View>
      </ScrollView>

      {/* Modal com vídeo */}
      <Modal
        visible={!!videoUrl}
        transparent
        animationType='slide'
        onRequestClose={() => setVideoUrl(null)}
      >
        <View style={styles.videoOverlay}>
          <View style={styles.videoContainer}>
            {Platform.OS === 'web' ? (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 12,
                  overflow: 'hidden',
                  display: 'block',
                }}
              >
                <iframe
                  width='100%'
                  height='100%'
                  src={videoUrl ?? undefined}
                  title='YouTube video'
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                />
              </div>
            ) : (
              videoUrl && (
                <WebView
                  source={{ uri: videoUrl }}
                  style={{ flex: 1, borderRadius: 12 }}
                  javaScriptEnabled
                  domStorageEnabled
                />
              )
            )}

            <Pressable
              style={styles.closeButton}
              onPress={() => setVideoUrl(null)}
            >
              <MaterialCommunityIcons name='close' color='#fff' size={28} />
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Modal de categorias extras */}
      <Modal
        visible={modalVisible}
        transparent
        animationType='slide'
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Escolha uma categoria</Text>

            {(
              ['Pilates', 'Alongamento', 'Recuperação Ativa'] as CategoriaKey[]
            ).map(item => (
              <TouchableOpacity
                key={item}
                style={styles.modalOption}
                onPress={() => {
                  setCategoria(item)
                  setModalVisible(false)
                }}
              >
                <MaterialCommunityIcons
                  name={conteudo[item].icone}
                  size={20}
                  color='#1ab394'
                  style={{ marginRight: 8 }}
                />
                <Text style={styles.modalOptionText}>{item}</Text>
              </TouchableOpacity>
            ))}

            <TouchableOpacity
              style={[styles.modalOption, { marginTop: 12 }]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={[styles.modalOptionText, { color: '#999' }]}>
                Cancelar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </LinearGradient>
  )
}
