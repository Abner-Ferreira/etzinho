import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './estilizacao.styles'

// famosos com as doencas
import ryan from '@/src/assets/images/famosos/ryan-reynolds.webp'
import emma from '@/src/assets/images/famosos/emma-stone.webp'
import lady from '@/src/assets/images/famosos/lady-gaga.jpg'
import dwayne from '@/src/assets/images/famosos/dwayne-johnson.jpg'
import adele from '@/src/assets/images/famosos/adele.webp'
import oprah from '@/src/assets/images/famosos/oprah.jpg'
import david from '@/src/assets/images/famosos/david-backham.jpg'
import charlize from '@/src/assets/images/famosos/charlize-theron.jpg'
import selena from '@/src/assets/images/famosos/selena-gomez.webp'
import jean from '@/src/assets/images/famosos/jean-claude.webp'

// icone das doencas
import ansiedade from '@/src/assets/images/doencas/panico.png'
import depressao from '@/src/assets/images/doencas/depressao.png'
import panico from '@/src/assets/images/doencas/panico.png'
import toc from '@/src/assets/images/doencas/toc.png'
import bipolar from '@/src/assets/images/doencas/bipolar.png'

interface ConhecimentoCardsProps {
  filtroAtivo: string
}

export function ConhecimentoCards({ filtroAtivo }: ConhecimentoCardsProps) {
  const conhecimentos = [
    {
      id: 1,
      categoria: 'Ansiedade',
      icone: ansiedade,
      corFundo: '#f3f9ff',
      title: 'Ansiedade (Transtorno de Ansiedade Generalizada - TAG)',
      description:
        'É o excesso de preocupação constante com o futuro, que você não consegue parar ou controlar. É como se seu cérebro vivesse em estado de alerta máximo o tempo todo.',
      bodyFunction:
        'O corpo libera hormônios de emergência (adrenalina). Isso causa sintomas físicos como: coração acelerado, suor, tensão muscular, dor de cabeça e dificuldade para relaxar ou dormir. É uma energia de "luta ou fuga" desnecessária.',
      pessoas: [
        { nome: 'Ryan Reynolds', foto: ryan },
        { nome: 'Emma Stone', foto: emma },
      ],
    },
    {
      id: 2,
      categoria: 'Depressão',
      icone: depressao,
      corFundo: '#fff9ed',
      title: 'Depressão',
      description:
        'É uma tristeza profunda e persistente que não passa e uma perda de interesse em quase tudo. Não é só estar triste; é uma doença que afeta sua energia e sua forma de ver a vida.',
      bodyFunction:
        'O cérebro tem uma produção reduzida de neurotransmissores importantes (como a serotonina). Isso leva a: cansaço extremo, alterações no sono, mudanças no apetite e dores físicas sem explicação médica.',
      pessoas: [
        { nome: 'Lady Gaga', foto: lady },
        { nome: 'Dwayne Johnson', foto: dwayne },
      ],
    },
    {
      id: 3,
      categoria: 'Síndrome do Pânico',
      icone: panico,
      corFundo: '#f3f9ff',
      title: 'Síndrome do Pânico',
      description:
        'São ataques de ansiedade muito intensos que chegam de repente. A pessoa sente um medo extremo e a sensação real de que está tendo um ataque cardíaco, enlouquecendo ou que vai morrer.',
      bodyFunction:
        'O corpo tem uma descarga inesperada de adrenalina. O coração dispara, há falta de ar, tontura e formigamento — é o sistema de alarme disparando sem perigo real.',
      pessoas: [
        { nome: 'Adele', foto: adele },
        { nome: 'Oprah Winfrey', foto: oprah },
      ],
    },
    {
      id: 4,
      categoria: 'TOC',
      icone: toc,
      corFundo: '#fff9ed',
      title: 'Transtorno Obsessivo-Compulsivo (TOC)',
      description:
        'É quando você tem pensamentos e medos repetitivos (obsessões). Para acalmar a ansiedade, você realiza rituais (compulsões), como lavar as mãos várias vezes.',
      bodyFunction:
        'O cérebro fica preso num ciclo: a obsessão gera ansiedade, e a compulsão traz alívio temporário. O corpo busca repetir o comportamento para reduzir o desconforto.',
      pessoas: [
        { nome: 'David Beckham', foto: david },
        { nome: 'Charlize Theron', foto: charlize },
      ],
    },
    {
      id: 5,
      categoria: 'Transtorno Bipolar',
      icone: bipolar,
      corFundo: '#f3f9ff',
      title: 'Transtorno Bipolar',
      description:
        'É uma doença que causa mudanças extremas de humor que duram semanas ou meses, alternando entre depressão e mania.',
      bodyFunction:
        'Na fase de mania há excesso de neurotransmissores e energia, e na depressão ocorre queda drástica. Essa oscilação causa impulsividade, insônia e alterações no comportamento.',
      pessoas: [
        { nome: 'Selena Gomez', foto: selena },
        { nome: 'Jean-Claude Van Damme', foto: jean },
      ],
    },
  ]

  const filtrados =
    filtroAtivo === 'Todos'
      ? conhecimentos
      : conhecimentos.filter(c => c.categoria === filtroAtivo)

  return (
    <>
      {filtrados.map(card => (
        <View
          key={card.id}
          style={[styles.card, { backgroundColor: card.corFundo }]}
        >
          <View style={styles.headerCard}>
            <Image source={card.icone} style={styles.iconCard} />
            <Text style={styles.tituloCard}>{card.title}</Text>
          </View>

          <Text style={styles.descricaoCard}>{card.description}</Text>

          {/* Corpo */}
          <Text style={styles.label}>Como o corpo funciona:</Text>
          <Text style={styles.text}>{card.bodyFunction}</Text>

          {/* Seção de apoio */}
          <Text style={styles.subtituloCard}>Você não está sozinho(a)!</Text>

          {/* Famosos */}
          <View style={styles.rowPessoas}>
            {card.pessoas.map((pessoa, index) => (
              <View key={index} style={styles.colunaPessoa}>
                <Image source={pessoa.foto} style={styles.fotoPessoa} />
                <Text style={styles.nomePessoa}>{pessoa.nome}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </>
  )
}
