import { Link, useParams } from 'react-router'
import { series } from '../data/series'

function SerieDetalhe() {
  const { slug } = useParams()
  const serie = series.find((s) => s.slug === slug)

  if (!serie) {
    return <p className="detalhes-container">Série não encontrada.</p>
  }

  return (
    <main className="detalhes-container">
      <img
        className="imagem_preview"
        src={serie.imagem}
        alt={`Capa da série ${serie.titulo}`}
      />
      <div className="descricao-serie">
        <h2>{serie.titulo}</h2>
        <p><strong>Gênero:</strong> {serie.genero.join(', ')}</p>
        <p><strong>Sinopse:</strong> {serie.sinopse}</p>
        <p><strong>Temporadas:</strong> {serie.temporadas}</p>
        <p><strong>Ano de Lançamento:</strong> {serie.ano}</p>
        <p><strong>Nota:</strong> {serie.nota.toLocaleString('pt-BR')} no IMDB</p>
      </div>
      <Link className="texto-negrito" to="/">Voltar</Link>
    </main>
  )
}

export default SerieDetalhe
