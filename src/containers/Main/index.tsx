import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CardContato from '../../components/CardContato'
import { addSvg } from '../../utils/svg'
import ModalContato from '../../components/ModalContato'

import * as S from './styles'

import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/Busca'
import { Campo } from '../../styles'

const Main = () => {
  const dispatch = useDispatch()

  const { lista } = useSelector((state: RootReducer) => state.contatos)
  const { termo } = useSelector((state: RootReducer) => state.busca)

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const filtraContatos = () => {
    let contatosFiltrados = lista
    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (contato) => contato.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )
      return contatosFiltrados
    } else {
      return lista
    }
  }

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const quantidadeContatos = filtraContatos()
  const contatosOrdenadosAlfabeticamente = quantidadeContatos
    .slice()
    .sort((a, b) => {
      const nomeA = a.nome.toLowerCase()
      const nomeB = b.nome.toLowerCase()

      if (nomeA < nomeB) {
        return -1
      }
      if (nomeA > nomeB) {
        return 1
      }
      return 0
    })

  return (
    <S.ContainerMain>
      <S.Header>
        <S.TituloLista>Lista de contatos</S.TituloLista>
        <Campo
          placeholder="buscar"
          value={termo}
          onChange={(e) => dispatch(alteraTermo(e.target.value))}
        />
        <S.BotaoAdicionar type="button" onClick={openModal}>
          {addSvg}
        </S.BotaoAdicionar>
      </S.Header>
      <div>
        <ul>
          {contatosOrdenadosAlfabeticamente.map((c) => (
            <li key={c.telefone}>
              <CardContato
                telefone={c.telefone}
                sobre={c.sobre}
                nome={c.nome}
                apelido={c.apelido}
                foto={c.foto}
                email={c.email}
                id={c.id}
              />
            </li>
          ))}
        </ul>
      </div>
      <ModalContato isOpen={modalIsOpen} closeModal={closeModal} />
    </S.ContainerMain>
  )
}

export default Main
