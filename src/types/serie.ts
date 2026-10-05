export type Serie = {
  slug: string        // vai virar o endereço: /serie/loki
  titulo: string
  imagem: string      // ex.: "/img/loki.jfif"
  genero: string[]      // ex.: ["Ação", "Aventura", "Ficção Científica"]
  sinopse: string
  temporadas: number
  ano: number
  nota: number
}