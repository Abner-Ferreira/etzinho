// imagens dos livros

// livros fantasias
import imgAlice from '@/src/assets/images/capas/capa-alice-no-pais-das-maravilhas.webp'
import imgJardim from '@/src/assets/images/capas/capa-o-jardim-secreto.jpg'
import imgMeninaLivros from '@/src/assets/images/capas/capa-menina-livros.jpg'
import imgTomSawyer from '@/src/assets/images/capas/capa-aventurasdetom.jpg'
import imgSelva from '@/src/assets/images/capas/capa-selva.webp'
import imgOz from '@/src/assets/images/capas/oz.jpg'
import imgOceano from '@/src/assets/images/capas/capa-oceano.jpg'
import imgPeterPan from '@/src/assets/images/capas/Peter_Pan.jpeg'

// livros humor
import imgCupcake from '@/src/assets/images/capas/capa-o-cupcake-da-discordia.jpg'
import imgSutil from '@/src/assets/images/capas/capa-sutil.jpg'
import imgAuto from '@/src/assets/images/capas/capa-compadecida.jpg'
import imgHomem from '@/src/assets/images/capas/capa-homem.jpg'
import imgTextos from '@/src/assets/images/capas/capa-textos.jpg'

// livros reflexão
import imgPequenoHeroi from '@/src/assets/images/capas/capa-o-pequeno-heroi.jpg'
import imgPequenoPrincipe from '@/src/assets/images/capas/capa-o-pequeno-principe.jpg'
import imgAparte from '@/src/assets/images/capas/capa-aparte.jpg'
import imgExtra from '@/src/assets/images/capas/capa-extra.jpg'
import imgPequenoManual from '@/src/assets/images/capas/capa-manual.webp'

// pdfs dos livros

// pdfs fantasias
import pdfAlice from '@/src/assets/livros/alice-no-pais-das-maravilhas.pdf'
import pdfJardim from '@/src/assets/livros/o-jardim-secreto.pdf'
import pdfMeninaLivros from '@/src/assets/livros/a-menina-que-roubava-livros.pdf'
import pdfTomSawyer from '@/src/assets/livros/as_aventuras_de_tom_sawyer.pdf'
import pdfSelva from '@/src/assets/livros/O_livro_da_selva-Rudyard_Kipling_Mojo-DaoP.pdf'
import pdfOz from '@/src/assets/livros/O-Magico-De-Oz-Lyman-Frank-Baum.pdf'
import pdfOceano from '@/src/assets/livros/O-oceano-no-fim-do-caminho.pdf'
import pdfPeterPan from '@/src/assets/livros/peter-pan.pdf'

// pdfs humor
import pdfCupcake from '@/src/assets/livros/o-cupcake-da-discordia.pdf'
import pdfSutil from '@/src/assets/livros/sutil-arte.pdf'
import pdfAuto from '@/src/assets/livros/CastroDigital_Auto_da_Compadecida_Ariano_Suassuna.pdf'
import pdfHomem from '@/src/assets/livros/homem-javanes.pdf'
import pdfTextos from '@/src/assets/livros/textos-crueis-demais-para-serem-tcd.pdf'

// pdfs reflexão
import pdfPequenoHeroi from '@/src/assets/livros/o-pequeno-heroi.pdf'
import pdfPequenoPrincipe from '@/src/assets/livros/o-pequeno-principe.pdf'
import pdfAparte from '@/src/assets/livros/a-parte-que-falta.pdf'
import pdfExtra from '@/src/assets/livros/extraordinario.pdf'
import pdfPequenoManual from '@/src/assets/livros/pequeno-manual.pdf'

export const livros = [
  // Fantasias
  {
    id: 1,
    categoria: 'Fantasia',
    titulo: 'Alice no País das Maravilhas - Lewis Carroll',
    imagem: imgAlice,
    pdf: pdfAlice,
    descricao:
      'Uma menina curiosa cai numa toca de coelho e descobre um mundo mágico cheio de personagens excêntricos e aventuras surreais.',
  },
  {
    id: 2,
    categoria: 'Fantasia',
    titulo: 'O Jardim Secreto - Frances Hodgson Burnett',
    imagem: imgJardim,
    pdf: pdfJardim,
    descricao:
      'Uma menina solitária descobre um jardim abandonado e, ao restaurá-lo, transforma também sua própria vida e a dos que estão à sua volta.',
  },
  {
    id: 3,
    categoria: 'Fantasia',
    titulo: 'A Menina que Roubava Livros - Markus Zusak',
    imagem: imgMeninaLivros,
    pdf: pdfMeninaLivros,
    descricao:
      'Durante a Segunda Guerra, Liesel encontra nos livros uma forma de escapar da dor e entender o mundo.',
  },
  {
    id: 4,
    categoria: 'Fantasia',
    titulo: 'As Aventuras de Tom Sawyer - Mark Twain',
    imagem: imgTomSawyer,
    pdf: pdfTomSawyer,
    descricao:
      'Travessuras de Tom, amizade com Huck e coragem para enfrentar medos; ótimo para discutir limites e escolhas.',
  },
  {
    id: 5,
    categoria: 'Fantasia',
    titulo: 'O Livro da Selva - Rudyard Kipling',
    imagem: imgSelva,
    pdf: pdfSelva,
    descricao:
      'Criado por lobos na selva indiana, Mowgli aprende sobre coragem, liberdade e pertencimento enquanto é guiado por Baloo e Bagheera. Uma fábula atemporal sobre instinto, aprendizado e o equilíbrio entre natureza e civilização.',
  },
  {
    id: 6,
    categoria: 'Fantasia',
    titulo: 'O Mágico de Oz - L. Frank Baum',
    imagem: imgOz,
    pdf: pdfOz,
    descricao:
      'Longe de casa, Dorothy aprende sobre coragem, coração e inteligência com amigos inusitados.',
  },
  {
    id: 7,
    categoria: 'Fantasia',
    titulo: 'O Oceano no Fim do Caminho - Neil Gaiman',
    imagem: imgOceano,
    pdf: pdfOceano,
    descricao:
      'Um homem volta à cidade natal e revive lembranças de infância e fantasia que moldaram quem ele é.',
  },
  {
    id: 8,
    categoria: 'Fantasia',
    titulo: 'Peter Pan e Wendy - J. M. Barrie',
    imagem: imgPeterPan,
    pdf: pdfPeterPan,
    descricao:
      'Wendy e os irmãos viajam com Peter à Terra do Nunca para viver aventuras com fadas, piratas e meninos perdidos — um convite à imaginação, coragem e amizade.',
  },

  // Humor
  {
    id: 9,
    categoria: 'Humor',
    titulo: 'O Cupcake da Discórdia - Stefania Gil',
    imagem: imgCupcake,
    pdf: pdfCupcake,
    descricao:
      'Romance leve e divertido sobre rivalidade, segredos e romance que nasce em torno de uma confeitaria especial.',
  },
  {
    id: 10,
    categoria: 'Humor',
    titulo: 'A Arte Subtil de Ligar o F*da-se - Mark Manson',
    imagem: imgSutil,
    pdf: pdfSutil,
    descricao:
      'Um guia sarcástico e honesto sobre viver com menos culpa e mais propósito.',
  },
  {
    id: 11,
    categoria: 'Humor',
    titulo: 'O Auto da Compadecida - Ariano Suassuna',
    imagem: imgAuto,
    pdf: pdfAuto,
    descricao:
      'Chicó e João Grilo enfrentam o sertão com esperteza e fé — rindo das injustiças e das próprias desgraças.',
  },
  {
    id: 12,
    categoria: 'Humor',
    titulo: 'Homem que Sabia Javanês e Outros Contos - Lima Barreto',
    imagem: imgHomem,
    pdf: pdfHomem,
    descricao:
      'Um impostor convence a todos que fala javanês; sátira genial sobre aparência e vaidade social.',
  },
  {
    id: 13,
    categoria: 'Humor',
    titulo: 'Textos Cruéis Demais para Serem Lidos Rapidamente - Igor Pires',
    imagem: imgTextos,
    pdf: pdfTextos,
    descricao:
      'Reflexões e ironias sobre amor, ego e vulnerabilidade.',
  },

  // Reflexão
  {
    id: 14,
    categoria: 'Reflexão',
    titulo: 'O Pequeno Herói - Judith Steen',
    imagem: imgPequenoHeroi,
    pdf: pdfPequenoHeroi,
    descricao:
      'História inspiradora de coragem e superação de uma criança que, mesmo diante das dificuldades, encontra forças para ser um verdadeiro herói.',
  },
  {
    id: 15,
    categoria: 'Reflexão',
    titulo: 'O Pequeno Príncipe - Antoine de Saint-Exupéry',
    imagem: imgPequenoPrincipe,
    pdf: pdfPequenoPrincipe,
    descricao:
      'Um piloto perdido no deserto encontra um menino vindo de outro planeta, e através de conversas simples, descobre reflexões profundas sobre amor, amizade e a essência da vida.',
  },
  {
    id: 16,
    categoria: 'Reflexão',
    titulo: 'A Parte Que Falta Encontra o Grande O - Shel Silverstein',
    imagem: imgAparte,
    pdf: pdfAparte,
    descricao:
      'Após finalmente encontrar a peça que parecia completar seu vazio, o pequeno círculo percebe que o verdadeiro crescimento vem de aprender a rolar sozinho. Uma continuação poética sobre amadurecimento, autonomia e amor próprio.',
  },
  {
    id: 17,
    categoria: 'Reflexão',
    titulo: 'Extraordinário - R. J. Palacio',
    imagem: imgExtra,
    pdf: pdfExtra,
    descricao:
      'Auggie, um menino com diferença facial, enfrenta o desafio de ser aceito.',
  },
  {
    id: 18,
    categoria: 'Reflexão',
    titulo: 'O Pequeno Manual Antirracista - Djamila Ribeiro',
    imagem: imgPequenoManual,
    pdf: pdfPequenoManual,
    descricao:
      '13 lições curtas sobre empatia, equidade e consciência social.',
  },
]
