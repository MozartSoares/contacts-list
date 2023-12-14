import { useDispatch } from 'react-redux'

import { FotoContato, InfoContato, NomeContato } from '../../styles'
import * as S from './styles'
import ContatoClass from '../../models/contato'
import { remover, selecionarContato } from '../../store/Contatos'
import { lixeiraSvg } from '../../utils/svg'

type Props = ContatoClass

const CardContato = ({
  nome,
  apelido,
  telefone,
  email,
  foto,
  sobre,
  id
}: Props) => {
  const dispatch = useDispatch()

  const handleVisualizarContato = () => {
    dispatch(
      selecionarContato({ nome, apelido, telefone, email, foto, sobre, id })
    )
  }

  const handleRemoverContato = () => {
    dispatch(remover(telefone))

    dispatch(selecionarContato(null))
  }

  return (
    <S.ContainerCard>
      <FotoContato src={foto} />
      <div>
        <NomeContato>{nome}</NomeContato>
        <InfoContato>{apelido}</InfoContato>
      </div>
      <NomeContato>{telefone}</NomeContato>
      <InfoContato>{email}</InfoContato>
      <S.BotaoVisualizar onClick={() => handleVisualizarContato()}>
        Visualizar
      </S.BotaoVisualizar>
      <S.BotaoRemover onClick={handleRemoverContato}>
        {lixeiraSvg}
      </S.BotaoRemover>
    </S.ContainerCard>
  )
}

export default CardContato
