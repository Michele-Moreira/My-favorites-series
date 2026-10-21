import type { SerieTmdb } from '../types/tmdb'

const traducoesStatus: Record<string, string> = {
  'Returning Series': 'Em exibição',
  'Ended': 'Finalizada',
  'Canceled': 'Cancelada',
  'In Production': 'Em produção',
  'Planned': 'Planejada',
}

export function traduzirStatus(status: string) {
  return traducoesStatus[status] ?? status
}

export function formatarNota(nota: number) {
  if (nota === 0) {
    return 'sem nota ainda'
  }
  return nota.toFixed(1).replace('.', ',')
}

export function formatarData(data: string | null) {
  if (!data) {
    return 'sem data'
  }
  const [ano, mes, dia] = data.split('-')
  return `${dia}/${mes}/${ano}`
}

export function streamingsBrasil(serie: SerieTmdb) {
  return serie['watch/providers'].results.BR?.flatrate ?? []
}