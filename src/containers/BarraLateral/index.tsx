import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PerfilContato from '../../components/PerfilContato'
import { Titulo } from '../../styles'
import {
  Aside,
  BotaoEditar,
  BotaoParar,
  ContainerPerfil,
  ContainerTitulo,
  Mensagem
} from './styles'
import { RootReducer } from '../../store'
import { editarContato, selecionarContato } from '../../store/Contatos'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const [isEditMode, setIsEditMode] = useState(false)
  const { lista, contatoSelecionado } = useSelector(
    (state: RootReducer) => state.contatos
  )
  const totalContatos = lista.length

  const handleEditar = () => {
    if (contatoSelecionado !== null) {
      dispatch(
        editarContato({
          ...contatoSelecionado
        })
      )

      setIsEditMode(true)
    }
  }

  const handleCancelar = () => {
    setIsEditMode(false)
  }

  const mensagem =
    totalContatos === 0
      ? 'Você ainda não tem nenhum contato.'
      : totalContatos === 1
        ? 'Você possui 1 contato.'
        : `Você possui ${totalContatos} contatos.`

  const PararVisualizacao = () => {
    dispatch(selecionarContato(null))
  }

  return (
    <Aside>
      <ContainerTitulo>
        <Titulo>Easy contacts</Titulo>
        <Mensagem>{mensagem}</Mensagem>
      </ContainerTitulo>
      {contatoSelecionado && (
        <ContainerPerfil>
          <PerfilContato
            isEditMode={isEditMode}
            onCancelar={handleCancelar}
            onEditar={handleEditar}
            onSalvar={() => {
              setIsEditMode(false)
            }}
          />

          {!isEditMode && (
            <>
              <BotaoEditar type="button" onClick={handleEditar}>
                Editar
              </BotaoEditar>
              <BotaoParar type="button" onClick={PararVisualizacao}>
                Fechar
              </BotaoParar>
            </>
          )}
        </ContainerPerfil>
      )}
    </Aside>
  )
}

export default BarraLateral
