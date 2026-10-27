import { Link } from 'react-router'

type Props = {
  mensagem: string
}

function MensagemErro({ mensagem }: Props) {
  return (
    <main className="detalhes-container" role="alert">
      <p>{mensagem}</p>
      <Link className="texto-negrito" to="/">
        Voltar pro início
      </Link>
    </main>
  )
}

export default MensagemErro