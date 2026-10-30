import { Link, useLocation } from 'react-router'
import type { Serie } from '../types/serie'

type Props = {
  serie: Serie
}

function SerieCard({ serie }: Props) {
  const { search } = useLocation()

  return (
    <Link to={`/serie/${serie.slug}`} state={{ voltarPara: `/${search}` }}>
      <img
        className="imagem_preview"
        src={serie.imagem}
        alt={`Capa da série ${serie.titulo}`}
      />
    </Link>
  )
}

export default SerieCard
 

