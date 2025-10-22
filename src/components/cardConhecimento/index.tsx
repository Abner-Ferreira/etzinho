// src/components/ConditionCard.tsx
import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './estilizacao.styles'

interface ConhecimentoCardsProps {
  id: number
  title: string
  description: string
  bodyFunction: string
  celebrities: string
}

export function ConhecimentoCards() {
  const conhecimentos: ConhecimentoCardsProps[] = [
    {
      id: 1,
      title: 'Ansiedade (Transtorno de Ansiedade Generalizada - TAG)',
      description:
        'É o excesso de preocupação constante com o futuro, que você não consegue parar ou controlar. É como se seu cérebro vivesse em estado de alerta máximo o tempo todo.',
      bodyFunction:
        'O corpo libera hormônios de emergência (adrenalina). Isso causa sintomas físicos como: coração acelerado, suor, tensão muscular, dor de cabeça e dificuldade para relaxar ou dormir. É uma energia de "luta ou fuga" desnecessária.',
      celebrities: 'Ryan Reynolds (ator) e Emma Stone (atriz).',
    },
    {
      id: 2,
      title: 'Depressão',
      description:
        'É uma tristeza profunda e persistente que não passa e uma perda de interesse em quase tudo. Não é só estar triste; é uma doença que afeta sua energia e sua forma de ver a vida.',
      bodyFunction:
        'O cérebro tem uma produção reduzida de neurotransmissores importantes (como a serotonina). Isso leva a: cansaço extremo, alterações no sono (insônia ou sono demais), mudanças no apetite, falta de concentração e, muitas vezes, dores físicas sem explicação médica.',
      celebrities: 'Lady Gaga (cantora) e Dwayne "The Rock" Johnson (ator).',
    },
    {
      id: 3,
      title: 'Síndrome do Pânico',
      description:
        'São ataques de ansiedade muito intensos que chegam de repente. A pessoa sente um medo extremo e a sensação real de que está tendo um ataque cardíaco, enlouquecendo ou que vai morrer.',
      bodyFunction:
        'O corpo tem uma descarga maciça e inesperada de adrenalina. O coração dispara, você tem falta de ar, tontura e formigamento. É o sistema de alarme do corpo disparando sem que haja um perigo real.',
      celebrities:
        'Adele (cantora) e Oprah Winfrey (apresentadora/empresária).',
    },
    {
      id: 4,
      title: 'Transtorno Obsessivo-Compulsivo (TOC)',
      description:
        'É quando você tem pensamentos e medos repetitivos e indesejados (obsessões). Para acalmar essa ansiedade, você se sente obrigado a fazer rituais ou rotinas específicas (compulsões), como lavar as mãos várias vezes ou conferir a porta.',
      bodyFunction:
        'O cérebro fica preso em um ciclo. A obsessão gera ansiedade, e o ato de fazer a compulsão gera um alívio temporário. O corpo está sempre buscando essa sensação de alívio por meio de um comportamento repetitivo.',
      celebrities:
        'David Beckham (ex-jogador de futebol) e Charlize Theron (atriz).',
    },
    {
      id: 5,
      title: 'Transtorno Bipolar',
      description:
        'É uma doença que causa mudanças extremas de humor que duram semanas ou meses. A pessoa oscila entre episódios de depressão (tristeza e energia baixa) e episódios de mania (energia e euforia muito altas, sono mínimo e impulsividade).',
      bodyFunction:
        'A química cerebral oscila drasticamente entre picos e vales. Na fase de mania, há excesso de atividade neural e liberação de neurotransmissores. O corpo não descansa e o raciocínio fica acelerado, gerando atitudes impulsivas e descontroladas.',
      celebrities:
        'Selena Gomez (cantora/atriz) e Jean-Claude Van Damme (ator).',
    },
  ]

  return (
    <>
      {conhecimentos.map(conhecimento => (
        <View style={styles.card} key={conhecimento.id}>
          <Text style={styles.title}>{conhecimento.title}</Text>

          <Text style={styles.label}>O que é:</Text>
          <Text style={styles.text}>{conhecimento.description}</Text>

          <Text style={styles.label}>Como o corpo funciona:</Text>
          <Text style={styles.text}>{conhecimento.bodyFunction}</Text>

          <Text style={styles.label}>Famosos que se tratam:</Text>
          <Text style={styles.text}>{conhecimento.celebrities}</Text>
        </View>
      ))}
    </>
  )
}
