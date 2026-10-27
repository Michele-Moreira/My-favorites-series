import type { Genero, SerieTmdb } from '../types/tmdb'

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

// O TMDB junta dois gêneros num nome só ("Action & Adventure") e deixa alguns em inglês
const traducoesGenero: Record<string, string[]> = {
  'Action & Adventure': ['Ação', 'Aventura'],
  'Sci-Fi & Fantasy': ['Ficção Científica', 'Fantasia'],
  'War & Politics': ['Guerra', 'Política'],
  'Kids': ['Infantil'],
  'News': ['Notícias'],
  'Soap': ['Novela'],
  'Talk': ['Entrevistas'],
}

export function traduzirGeneros(generos: Genero[]) {
  const nomes = generos.flatMap((g) => traducoesGenero[g.name] ?? [g.name])
  return [...new Set(nomes)]
}

export function formatarTemporadas(quantidade: number) {
  return quantidade === 1 ? '1 temporada' : `${quantidade} temporadas`
}

export function urlPoster(caminho: string | null) {
  return caminho ? `https://image.tmdb.org/t/p/w500${caminho}` : null
}
