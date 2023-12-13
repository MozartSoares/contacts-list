import { useDispatch } from 'react-redux'

import { FotoContato, InfoContato, NomeContato } from '../../styles'
import { BotaoVisualizar, ContainerCard, BotaoRemover } from './styles'
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
    console.log(id)
    dispatch(
      selecionarContato({ nome, apelido, telefone, email, foto, sobre, id })
    )
  }

  const handleRemoverContato = () => {
    dispatch(remover(telefone))

    dispatch(selecionarContato(null))
  }

  return (
    <ContainerCard>
      <FotoContato src={foto} />
      <div>
        <NomeContato>{nome}</NomeContato>
        <InfoContato>{apelido}</InfoContato>
      </div>
      <NomeContato>{telefone}</NomeContato>
      <InfoContato>{email}</InfoContato>
      <BotaoVisualizar onClick={() => handleVisualizarContato()}>
        Visualizar
      </BotaoVisualizar>
      <BotaoRemover onClick={handleRemoverContato}>{lixeiraSvg}</BotaoRemover>
    </ContainerCard>
  )
}

export default CardContato
