export type Serie = {
  slug: string        // vai virar o endereço: /serie/loki
  titulo: string
  imagem: string      // ex.: "/img/loki.jpg"
  genero: string[]      // ex.: ["Ação", "Aventura", "Ficção Científica"]
  sinopse: string
  temporadas: number
  ano: number
  nota: number
}

// Série da galeria ligada ao TMDB: o id busca os dados, o slug mantém os endereços antigos
export type Favorita = {
  id: number
  slug: string
  titulo: string
  imagem: string
}
