import { describe, it, expect } from 'vitest'
import type { SerieTmdb, Streaming } from '../types/tmdb'
import {
  traduzirStatus,
  formatarNota,
  formatarData,
  streamingsBrasil,
  traduzirGeneros,
  formatarTemporadas,
  urlPoster,
} from './formatar'

describe('traduzirStatus', () => {
  it('traduz um status conhecido', () => {
    expect(traduzirStatus('Ended')).toBe('Finalizada')
  })

  it('devolve o original quando não conhece o status', () => {
    expect(traduzirStatus('Pilot')).toBe('Pilot')
  })
})

describe('formatarNota', () => {
  it('devolve "sem nota ainda" quando a nota é 0', () => {
    expect(formatarNota(0)).toBe('sem nota ainda')
  })

  it('formata uma nota com uma casa decimal', () => {
    expect(formatarNota(8.4)).toBe('8,4')
  })

  it('formata uma nota com uma casa decimal arredondada', () => {
    expect(formatarNota(9)).toBe('9,0')
  })

  it('formata uma nota com duas casas decimais', () => {
    expect(formatarNota(7.75)).toBe('7,8')
  })
})

describe('formatarData', () => {
  it('devolve "sem data" quando a data é null', () => {
    expect(formatarData(null)).toBe('sem data')
  })

  it('formata uma data no formato YYYY-MM-DD para DD/MM/YYYY', () => {
    expect(formatarData('2026-11-03')).toBe('03/11/2026')
  })
})

describe('streamingsBrasil', () => {
  it('devolve a lista de streamings quando existe flatrate no BR', () => {
    const streaming: Streaming = { provider_id: 8, provider_name: 'Netflix', logo_path: '/logo.png' }
    const serie = serieFalsa({ link: 'https://example.com', flatrate: [streaming] })
    expect(streamingsBrasil(serie)).toEqual([streaming])
  })

  it('devolve [] quando não existe flatrate no BR', () => {
    const serie = serieFalsa()
    expect(streamingsBrasil(serie)).toEqual([])
  })
})

// Série com o mínimo de campos, só pra testar o streaming
function serieFalsa(br?: { link: string; flatrate?: Streaming[] }): SerieTmdb {
  return {
    id: 1,
    name: 'Série de teste',
    overview: '',
    poster_path: null,
    first_air_date: null,
    number_of_seasons: 1,
    vote_average: 0,
    status: 'Ended',
    genres: [],
    created_by: [],
    seasons: [],
    next_episode_to_air: null,
    'watch/providers': { results: { BR: br } },
  }
}

describe('traduzirGeneros', () => {
  it('separa os gêneros que o TMDB junta e traduz', () => {
    const generos = [
      { id: 10759, name: 'Action & Adventure' },
      { id: 18, name: 'Drama' },
    ]
    expect(traduzirGeneros(generos)).toEqual(['Ação', 'Aventura', 'Drama'])
  })

  it('não repete gênero', () => {
    const generos = [
      { id: 10765, name: 'Sci-Fi & Fantasy' },
      { id: 999, name: 'Fantasia' },
    ]
    expect(traduzirGeneros(generos)).toEqual(['Ficção Científica', 'Fantasia'])
  })
})

describe('formatarTemporadas', () => {
  it('usa o singular quando é 1', () => {
    expect(formatarTemporadas(1)).toBe('1 temporada')
  })

  it('usa o plural nos outros casos', () => {
    expect(formatarTemporadas(8)).toBe('8 temporadas')
  })
})

describe('urlPoster', () => {
  it('monta o endereço da imagem no TMDB', () => {
    expect(urlPoster('/abc.jpg')).toBe('https://image.tmdb.org/t/p/w500/abc.jpg')
  })

  it('devolve null quando a série não tem pôster', () => {
    expect(urlPoster(null)).toBeNull()
  })
})
