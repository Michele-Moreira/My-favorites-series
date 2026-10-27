import { useEffect, useState } from 'react'
import { ErroTmdb, pegarSerie } from '../services/tmdb'
import type { SerieTmdb } from '../types/tmdb'

// O estado tem 3 formas, e cada uma carrega só o que precisa
type Estado =
  | { tipo: 'carregando' }
  | { tipo: 'erro'; mensagem: string }
  | { tipo: 'pronto'; serie: SerieTmdb }

export function useSerie(id: number) {
  const [estado, setEstado] = useState<Estado>({ tipo: 'carregando' })

  useEffect(() => {
    let ignorar = false

    pegarSerie(id)
      .then((serie) => {
        if (ignorar) return
        setEstado({ tipo: 'pronto', serie })
      })
      .catch((erro) => {
        if (ignorar) return
        if (erro instanceof ErroTmdb && erro.status === 404) {
            setEstado({ tipo: 'erro', mensagem: 'Série não encontrada.' })
        } else {
            setEstado({ tipo: 'erro', mensagem: 'Não deu pra carregar agora. Tenta de novo daqui a pouco.' })
        }
      })

    return () => {
      ignorar = true
    }
  }, [id])

  return estado
}