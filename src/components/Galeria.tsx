import { series } from '../data/series'
import SerieCard from './SerieCard'

function Galeria() {
  return (
    <div className="galeria">
      {series.map((serie) => (
        <SerieCard key={serie.slug} serie={serie} />
      ))}
    </div>
  )
}

export default Galeria