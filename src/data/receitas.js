// imagens das receitas café da manhã
import imgAvocado from '@/src/assets/images/receitas/avocado-toast-with-everything-bagel-seasoning-feat.jpg'
import imgIogurte from '@/src/assets/images/receitas/iogurte_granola_frutasvermelhas.png'
import imgBlueberry from '@/src/assets/images/receitas/blueberry-overnight-oats.jpg'
import imgBanana from '@/src/assets/images/receitas/Banana-Spinach-Smoothie-Featured.jpg'
// imagens das receitas almoço
import imgWrap from '@/src/assets/images/receitas/wrap-de-queso-pepino-tomate-garbanzos-brotes-y-cebolla.webp'
import imgRoasted from '@/src/assets/images/receitas/roasted-salmon-and-veggies.jpg'
import imgMango from '@/src/assets/images/receitas/mangoblackbean.webp'
import imgBlackBean from '@/src/assets/images/receitas/vegetarian-black-bean-sweet-potato-tacos-recipe.jpg'

// imagens das receitas janta
import imgRisoto from '@/src/assets/images/receitas/risoto-cogumelos.jpg'
import imgSalmao from '@/src/assets/images/receitas/salmao-grelhado.jpg'
import imgSopaLentilha from '@/src/assets/images/receitas/lentil-spinach-soup.webp'
import imgTofu from '@/src/assets/images/receitas/tofu-broccoli-stir-fry.jpg'

// imagens das receitas lanches
import imgCoconut from '@/src/assets/images/receitas/Coconut-Oatmeal-Chocolate-Chip-Cookies.jpg'
import imgPalitos from '@/src/assets/images/receitas/palitos-vegetais-com-humus.png'
import imgMix from '@/src/assets/images/receitas/seeds-and-nuts.webp'
import imgPipoca from '@/src/assets/images/receitas/pipoca.jpeg'

export const receitas = [
  // Café da Manhã
  {
    id: 1,
    categoria: 'Café da Manhã',
    titulo: 'Avocado Toast com Sementes',
    imagem: imgAvocado,
    tempo: '5 min',
    kcal: 200,
    descricao:
      '• Pão integral + abacate + sementes de abóbora.\n• Tempere com limão e sal.\n\n💚 Magnésio e gorduras boas: ajudam a regular o cortisol.',
  },
  {
    id: 2,
    categoria: 'Café da Manhã',
    titulo: 'Iogurte com Granola e frutas',
    imagem: imgIogurte,
    tempo: '5 min',
    kcal: 230,
    descricao:
      '• Iogurte natural + granola integral + morangos/mirtilos + mel.\n• Monte em camadas e finalize com mel.\n\n🧠 Probióticos e flavonoides ajudam a reduzir ansiedade e melhoram o humor',
  },
  {
    id: 3,
    categoria: 'Café da Manhã',
    titulo: 'Overnight Oats com Mirtilos e Nozes',
    imagem: imgBlueberry,
    tempo: '10 min',
    kcal: 240,
    descricao:
      '• Aveia + iogurte + leite + mirtilos + nozes.\n• Misture e deixe na geladeira à noite.\n\n🧠 Rico em ômega-3 e antioxidantes: melhora foco e humor.',
  },
  {
    id: 4,
    categoria: 'Café da Manhã',
    titulo: 'Vitamina Verde Antiestresse',
    imagem: imgBanana,
    tempo: '8 min',
    kcal: 180,
    descricao:
      '• Espinafre + banana + manga + leite vegetal.\n• Bata tudo no liquidificador.\n\n🧘 Fonte de folato e magnésio: reduz ansiedade e cansaço mental.',
  },
  // Almoço
  {
    id: 5,
    categoria: 'Almoço',
    titulo: 'Wrap de vegetais',
    imagem: imgWrap,
    tempo: '10 min',
    kcal: 320,
    descricao:
      '• Tortilla integral + húmus + pepino + tomate + rúcula + azeite. \n• Espalhe o húmus, adicione vegetais e enrole.\n\n🧠 Grão-de-bico e azeite fornecem vitaminas B e gorduras boas que protegem o cérebro',
  },
  {
    id: 6,
    categoria: 'Almoço',
    titulo: 'Bowl de Salmão e Quinoa',
    imagem: imgRoasted,
    tempo: '20 min',
    kcal: 400,
    descricao:
      '• Salmão grelhado + quinoa + espinafre + abacate.\n• Monte o bowl e regue com azeite.\n\n🧠 Ômega-3 + folato = mente clara e menos estresse.',
  },
  {
    id: 7,
    categoria: 'Almoço',
    titulo: 'Salada de quinoa, feijão preto e manga',
    imagem: imgMango,
    tempo: '15 min',
    kcal: 350,
    descricao:
      '• Quinoa cozida + feijão preto + manga + espinafre + hortelã + azeite e limão.\n• Misture tudo e tempere a gosto.\n\n🧠 Leguminosas e folhas verdes fornecem vitaminas B e folato, elevando serotonina e dopamina',
  },
  {
    id: 8,
    categoria: 'Almoço',
    titulo: 'Tacos de Batata-Doce e Feijão Preto',
    imagem: imgBlackBean,
    tempo: '25 min',
    kcal: 350,
    descricao:
      '• Tortilla integral + batata-doce + feijão preto + repolho.\n• Monte e sirva com iogurte.\n\n ✨ Rico em fibras e vitamina B6 para estimular a serotonina.',
  },
  // Janta
  {
    id: 9,
    categoria: 'Jantar',
    titulo: 'Risoto de cogumelos',
    imagem: imgRisoto,
    tempo: '30 min',
    kcal: 380,
    descricao:
      '• Arroz arbóreo + cogumelos + caldo de legumes + cebola + azeite + parmesão.\n• Refogue, adicione caldo aos poucos e finalize com parmesão.\n\n🧠 Carboidratos complexos e fibras proporcionam energia contínua e apoio à síntese de neurotransmissore',
  },
  {
    id: 10,
    categoria: 'Jantar',
    titulo: 'Salmão grelhado com arroz integral e legumes',
    imagem: imgSalmao,
    tempo: '25 min',
    kcal: 400,
    descricao:
      '• Filé de salmão + arroz integral + brócolis/aspargos + limão + azeite.\n• Grelhe salmão e legumes, sirva sobre o arroz e regue com limão.\n\n🧠 Ômega-3 e vitamina D do salmão melhoram o humor; arroz integral oferece magnésio para equilibrar o stress',
  },
  {
    id: 11,
    categoria: 'Jantar',
    titulo: 'Sopa de Lentilhas e Espinafre',
    imagem: imgSopaLentilha,
    tempo: '30 min',
    kcal: 280,
    descricao:
      '• Lentilhas + cenoura + espinafre + gengibre.\n• Cozinhe e finalize com limão.\n\n🌿 Folate + ferro = mais energia e equilíbrio emocional.',
  },
  {
    id: 12,
    categoria: 'Jantar',
    titulo: 'Tofu com Brócolis e Gengibre',
    imagem: imgTofu,
    tempo: '20 min',
    kcal: 320,
    descricao:
      '• Tofu + brócolis + molho de soja + gengibre.\n• Salteie tudo rapidamente.\n\n🧘 Proteínas vegetais + antioxidantes: para nutrir e acalmar.',
  },

  // Lanches
  {
    id: 17,
    categoria: 'Lanches rápidos',
    titulo: 'Biscoitos de aveia e cacau 70%',
    imagem: imgCoconut,
    tempo: '20 min',
    kcal: 190,
    descricao:
      '• Aveia em flocos + banana amassada + cacau 70% + mel/açúcar de coco.\n• Misture, molde bolinhas e asse por 15min a 180°C.\n\n🧠 Fibras e vitaminas B da aveia estabilizam a glicemia; cacau amargo modula neurotransmissores e melhora o humor',
  },
  {
    id: 18,
    categoria: 'Lanches rápidos',
    titulo: 'Palitos de vegetais com húmus',
    imagem: imgPalitos,
    tempo: '10 min',
    kcal: 180,
    descricao:
      '• Cenoura e pepino em palitos + húmus + gergelim.\n• Sirva os palitos com húmus e salpique gergelim.\n\n🧠 Grão-de-bico fornece vitaminas B e fibras; azeite e tahine oferecem gorduras benéficas ao cérebro',
  },
  {
    id: 19,
    categoria: 'Lanches rápidos',
    titulo: 'Mix Relaxante',
    imagem: imgMix,
    tempo: '5 min',
    kcal: 210,
    descricao:
      '• Nozes + sementes de abóbora + pedaços de chocolate 70%.\n\n💆 Magnésio + flavonoides = alívio de tensão mental.',
  },
  {
    id: 20,
    categoria: 'Lanches rápidos',
    titulo: 'Pipoca Doce ou Salgada',
    imagem: imgPipoca,
    tempo: '10 min',
    kcal: 190,
    descricao:
      '• Milho + óleo + panela.\n• Para doce: açúcar + água + pitada de sal.\n\n😌 Fonte de triptofano, ajuda na produção de serotonina.',
  },

]
