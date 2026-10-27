// Só os campos que o site usa. O TMDB devolve muito mais, mas o
// TypeScript só precisa conhecer o que a gente lê.

export type Genero = {
  id: number
  name: string
}

export type Criador = {
  id: number
  name: string
}

export type Temporada = {
  id: number
  name: string
  season_number: number
  episode_count: number
  vote_average: number
  air_date: string | null
}

export type Streaming = {
  provider_id: number
  provider_name: string
  logo_path: string
}

export type SerieTmdb = {
  id: number
  name: string
  overview: string
  poster_path: string | null
  status: string
  genres: Genero[]
  created_by: Criador[]
  seasons: Temporada[]
  next_episode_to_air: {
    air_date: string
    episode_number: number
    season_number: number
  } | null
  'watch/providers': {
    results: {
      BR?: { link: string; flatrate?: Streaming[] }
    }
  }
}

export type ResultadoBusca = {
  results: {
    id: number
    name: string
    poster_path: string | null
    first_air_date: string
  }[]
}

