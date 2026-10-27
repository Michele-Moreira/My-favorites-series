import type { ResultadoBusca, SerieTmdb } from '../types/tmdb'

// Erro que guarda o status da resposta: 404 ("série não existe")
// pede uma mensagem diferente de 500 ("o TMDB caiu").
export class ErroTmdb extends Error {
  status: number

  constructor(status: number) {
    super(`TMDB respondeu ${status}`)
    this.status = status
  }
}

// Faz o pedido pela nossa função /api/tmdb, sempre em português.
async function pedir<T>(caminho: string, parametros: Record<string, string> = {}): Promise<T> {
  const query = new URLSearchParams({ language: 'pt-BR', ...parametros })
  const resposta = await fetch(`/api/tmdb/${caminho}?${query}`)

  if (!resposta.ok) {
    throw new ErroTmdb(resposta.status)
  }

  return resposta.json()
}

export function buscarSeries(termo: string) {
  return pedir<ResultadoBusca>('search/tv', { query: termo })
}

export function pegarSerie(id: number) {
  return pedir<SerieTmdb>(`tv/${id}`, { append_to_response: 'watch/providers' })
}

