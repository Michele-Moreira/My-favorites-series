import { Link } from 'react-router'
import type { Serie } from '../types/serie'

type Props = {
  serie: Serie
}

function SerieCard({ serie }: Props) {
  return (
    <Link to={`/serie/${serie.slug}`}>
      <img
        className="imagem_preview"
        src={serie.imagem}
        alt={`Capa da série ${serie.titulo}`}
      />
    </Link>
  )
}

export default SerieCard
 

