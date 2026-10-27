import { Navigate, useParams } from 'react-router'
import { favoritas } from '../data/favoritas'
import FichaSerie from '../components/FichaSerie'
import MensagemErro from '../components/MensagemErro'

function SerieDetalhe() {
  const { id } = useParams()
  const idNumerico = Number(id)

  // Endereço antigo (/serie/loki): troca pelo novo (/serie/84958) sem deixar o antigo no histórico
  if (Number.isNaN(idNumerico)) {
    const favorita = favoritas.find((f) => f.slug === id)

    if (!favorita) {
      return <MensagemErro mensagem="Série não encontrada." />
    }

    return <Navigate to={`/serie/${favorita.id}`} replace />
  }

  // A key faz a ficha começar do zero ao trocar de série
  return <FichaSerie key={idNumerico} id={idNumerico} />
}

export default SerieDetalhe
