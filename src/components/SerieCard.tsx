import type { Serie } from '../types/serie'

type Props = {
  serie: Serie
}

function SerieCard({ serie }: Props) {
  return (
    <img
      className="imagem_preview"
      src={serie.imagem}
      alt={`Capa da série ${serie.titulo}`}
    />
  )
}

export default SerieCard