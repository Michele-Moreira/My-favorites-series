import { useSearchParams } from 'react-router'
import { series } from '../data/series'
import SerieCard from './SerieCard'
import { semAcento } from '../utils/semAcento'

const generos = [...new Set(series.flatMap((serie) => serie.genero))].sort((a, b) => a.localeCompare(b, 'pt-BR'))

function Galeria() {
  const [parametros, setParametros] = useSearchParams()
  const busca = parametros.get('busca') ?? ''
  const genero = parametros.get('genero') ?? ''

  // replace: sem ele, cada letra digitada viraria um passo no histórico do navegador
  function mudarFiltro(nome: string, valor: string) {
    setParametros((atuais) => {
      if (valor) {
        atuais.set(nome, valor)
      } else {
        atuais.delete(nome)
      }
      return atuais
    }, { replace: true })
  }

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
          onChange={(e) => mudarFiltro('busca', e.target.value)}
        />
        <select
          aria-label="Filtrar por gênero"
          value={genero}
          onChange={(e) => mudarFiltro('genero', e.target.value)}
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