import { useState } from 'react'
import { series } from '../data/series'
import SerieCard from './SerieCard'
import { semAcento } from '../utils/semAcento'

const generos = [...new Set(series.flatMap((serie) => serie.genero))].sort()

function Galeria() {
  const [busca, setBusca] = useState('')
  const [genero, setGenero] = useState('')

  const seriesFiltradas = series.filter((serie) => {
    const bateBusca = semAcento(serie.titulo).includes(semAcento(busca))
    const bateGenero = genero ? serie.genero.includes(genero) : true
    return bateBusca && bateGenero
  })

  return (
    <>
      <div className="filtros">
        <input
          type="search"
          placeholder="Buscar série..."
          aria-label="Buscar série pelo nome"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <select
          aria-label="Filtrar por gênero"
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
        >
          <option value="">Todos os gêneros</option>
          {generos.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
      </div>

      {seriesFiltradas.length === 0 ? (
        <p className="sem-resultado">Nenhuma série encontrada.</p>
      ) : (
        <div className="galeria">
          {seriesFiltradas.map((serie) => (
            <SerieCard key={serie.slug} serie={serie} />
          ))}
        </div>
      )}
    </>
  )
}

export default Galeria