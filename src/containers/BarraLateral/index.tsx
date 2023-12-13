import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PerfilContato from '../../components/PerfilContato'
import { Titulo } from '../../styles'
import { Aside, ContainerTitulo } from './styles'
import { RootReducer } from '../../store'
import { editarContato } from '../../store/Contatos'

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

  return (
    <Aside>
      <ContainerTitulo>
        <Titulo>Easy contacts</Titulo>
        <h3>{mensagem}</h3>
      </ContainerTitulo>
      <PerfilContato
        isEditMode={isEditMode}
        onCancelar={handleCancelar}
        onEditar={handleEditar}
        onSalvar={() => {
          setIsEditMode(false)
        }}
      />
      {!isEditMode && (
        <button type="button" onClick={handleEditar}>
          Editar
        </button>
      )}
    </Aside>
  )
}

export default BarraLateral
