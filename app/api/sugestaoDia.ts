import sugestoes from "../data/sugestoes.json";

export interface Sugestao {
  id: number;
  titulo: string;
  subtitulo: string;
}

// Índice baseado em dia + hora
function getIndexHora(): number {
  const now = new Date();
  const seed = now.toDateString() + "-" + now.getHours(); // muda a cada hora
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash) % sugestoes.length;
}

// Retorna a sugestão da hora
export function getSugestaoHora(): Sugestao {
  const index = getIndexHora();
  return sugestoes[index];
}
