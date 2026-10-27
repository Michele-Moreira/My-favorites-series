import { Link } from 'react-router'
import { useSerie } from '../hooks/useSerie'
import { favoritas } from '../data/favoritas'
import Carregando from './Carregando'
import MensagemErro from './MensagemErro'
import { formatarNota, formatarTemporadas, traduzirGeneros, urlPoster } from '../utils/formatar'

type Props = {
  id: number
}

function FichaSerie({ id }: Props) {
  const estado = useSerie(id)

  if (estado.tipo === 'carregando') {
    return <Carregando />
  }

  if (estado.tipo === 'erro') {
    return <MensagemErro mensagem={estado.mensagem} />
  }

  const { serie } = estado
  // Mantém o nome que a Mi usa na galeria ("The Vampire Diaries", e não "Diários de um Vampiro")
  const titulo = favoritas.find((f) => f.id === id)?.titulo ?? serie.name
  const poster = urlPoster(serie.poster_path)
  const ano = serie.first_air_date?.slice(0, 4)
  const criadores = serie.created_by.map((c) => c.name).join(', ')

  // Série que ainda não estreou vem sem data, então o ano some da linha
  const detalhes = [
    ano,
    formatarTemporadas(serie.number_of_seasons),
    `★ ${formatarNota(serie.vote_average)} no TMDB`,
  ].filter(Boolean)

  return (
    <main className="ficha">
      {poster && <img className="ficha-fundo" src={poster} alt="" />}

      <div className="ficha-conteudo">
        {poster && (
          <img className="ficha-poster" src={poster} alt={`Pôster da série ${titulo}`} />
        )}

        <div className="ficha-info">
          <Link className="ficha-voltar" to="/">← Voltar</Link>
          <h1>{titulo}</h1>
          <p className="ficha-detalhes">{detalhes.join(' · ')}</p>

          <ul className="ficha-generos" aria-label="Gêneros">
            {traduzirGeneros(serie.genres).map((genero) => (
              <li key={genero}>{genero}</li>
            ))}
          </ul>

          <p className="ficha-sinopse">{serie.overview || 'Sinopse ainda não disponível.'}</p>

          {criadores && (
            <p className="ficha-criadores">
              <strong>Criado por</strong> {criadores}
            </p>
          )}
        </div>
      </div>
    </main>
  )
}

export default FichaSerie
