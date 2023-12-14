import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FotoContato, InfoContato, NomeContato } from '../../styles'
import { descSvg, emailSvg, foneSvg } from '../../utils/svg'
import * as S from './styles'
import { editarContato } from '../../store/Contatos'
import ContatoClass from '../../models/contato'
import { RootReducer } from '../../store'
import { BotaoSalvar } from '../ModalContato/styles'

type PerfilProps = {
  isEditMode: boolean
  onSalvar: () => void
  onCancelar: () => void
  onEditar: () => void
}

const PerfilContato: React.FC<PerfilProps> = ({ isEditMode, onSalvar }) => {
  const contatoSelecionado = useSelector(
    (state: RootReducer) => state.contatos.contatoSelecionado
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (contatoSelecionado) {
      setNome(contatoSelecionado.nome || '')
      setApelido(contatoSelecionado.apelido || '')
      setTelefone(contatoSelecionado.telefone || 0)
      setEmail(contatoSelecionado.email || '')
      setSobre(contatoSelecionado.sobre || '')
      setId(contatoSelecionado.id)
    }
  }, [contatoSelecionado])

  const [nome, setNome] = useState<string>('')
  const [apelido, setApelido] = useState<string>('')
  const [telefone, setTelefone] = useState<number>(0)
  const [email, setEmail] = useState<string>('')
  const [sobre, setSobre] = useState<string>('')
  const [id, setId] = useState<string>('')

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target

    switch (name) {
      case 'nome':
        setNome(value)
        break
      case 'apelido':
        setApelido(value)
        break
      case 'telefone':
        console.log('Novo valor do telefone:', value)
        setTelefone(Number(value))
        break
      case 'email':
        setEmail(value)
        break
      case 'sobre':
        setSobre(value)
        break
      default:
        break
    }
  }

  const handleSalvar = () => {
    const contatoEditado: ContatoClass = {
      ...contatoSelecionado,
      nome,
      apelido,
      telefone,
      email,
      sobre,
      id
    }
    console.log(contatoEditado.id)
    dispatch(editarContato(contatoEditado))
    onSalvar()
  }

  if (!contatoSelecionado) {
    return null
  }

  return (
    <S.Container>
      {contatoSelecionado.foto !== '' && (
        <FotoContato src={contatoSelecionado.foto} />
      )}
      <NomeContato>
        {isEditMode ? (
          <S.CampoSelecionado
            placeholder="Nome do contato"
            type="text"
            name="nome"
            value={nome}
            onChange={handleInputChange}
          />
        ) : (
          `${contatoSelecionado.nome}`
        )}
      </NomeContato>
      <InfoContato>
        {isEditMode ? (
          <S.CampoSelecionado
            placeholder="Apelido do contato"
            type="text"
            name="apelido"
            value={apelido}
            onChange={handleInputChange}
          />
        ) : (
          `${contatoSelecionado.apelido}`
        )}
      </InfoContato>
      <S.InfosContainer>
        <InfoContato>
          <label htmlFor="telefone">{foneSvg}</label>
          {isEditMode ? (
            <S.CampoSelecionado
              placeholder="Telefone do contato"
              id="telefone"
              type="tel"
              name="telefone"
              value={telefone}
              onChange={handleInputChange}
            />
          ) : (
            `${contatoSelecionado.telefone}`
          )}
        </InfoContato>
        <InfoContato>
          <label htmlFor="email">{emailSvg}</label>
          {isEditMode ? (
            <S.CampoSelecionado
              placeholder="Email do contato"
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          ) : (
            `${contatoSelecionado.email}`
          )}
        </InfoContato>
        <InfoContato>
          {descSvg}
          {isEditMode ? (
            <S.CampoSelecionadoTextarea
              placeholder="Descrição do contato"
              as="textarea"
              name="sobre"
              value={sobre}
              onChange={handleInputChange}
            />
          ) : (
            ` ${contatoSelecionado.sobre}`
          )}
        </InfoContato>
        {isEditMode && (
          <BotaoSalvar type="button" onClick={handleSalvar}>
            Salvar
          </BotaoSalvar>
        )}
      </S.InfosContainer>
    </S.Container>
  )
}

export default PerfilContato
