import { getSugestaoHora, Sugestao } from '@/app/api/sugestaoDia'
import { useState, useEffect } from 'react'

export function useSugestaoHora() {
  const [sugestao, setSugestao] = useState<Sugestao | null>(null)

  useEffect(() => {
    setSugestao(getSugestaoHora())

    const interval = setInterval(() => {
      setSugestao(getSugestaoHora())
    }, 1000 * 60 * 60) // atualiza a cada 1 hora

    return () => clearInterval(interval)
  }, [])

  return sugestao
}
