import { useState, ChangeEvent } from 'react'
import Modal from 'react-modal'
import { useDispatch } from 'react-redux'
import { v4 } from 'uuid'

import ContatoClass from '../../models/contato'
import { cadastrar } from '../../store/Contatos'
import {
  ApelidoPreview,
  CampoCadastro,
  CampoTextarea,
  ContainerBotoes,
  ContainerCadastro,
  ContainerCardPreview,
  FormularioCadastro,
  BotaoSalvar,
  InputFotoContainer,
  PreviewContainer,
  TituloCadastro,
  BotaoFechar
} from './styles'
import { FotoContato, InfoContato, NomeContato } from '../../styles'
import { Campo } from '../../containers/Main/styles'

interface ModalContatoProps {
  isOpen: boolean
  closeModal: () => void
}

const ModalContato: React.FC<ModalContatoProps> = ({ isOpen, closeModal }) => {
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [apelido, setApelido] = useState('')
  const [foto, setFoto] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState(0)
  const [sobre, setSobre] = useState('')
  const [imagemPreview, setImagemPreview] = useState<string | null>(null)

  const handleImagemChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      const imagem = files[0]

      const reader = new FileReader()
      reader.onloadend = () => {
        const dataUrl = reader.result as string
        setFoto(dataUrl)
        setImagemPreview(dataUrl)
      }

      reader.readAsDataURL(imagem)
    }
  }
  const handleSalvar = () => {
    const novoId = v4()
    const novoContato: ContatoClass = new ContatoClass(
      nome,
      apelido,
      email,
      telefone,
      sobre,
      novoId,
      foto
    )

    dispatch(cadastrar(novoContato))
    closeModal()
    setNome('')
    setApelido('')
    setFoto('')
    setEmail('')
    setTelefone(0)
    setSobre('')
    setImagemPreview(null)
    setApelido('')
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <ContainerCadastro>
        <FormularioCadastro>
          <TituloCadastro>Adicionar Contato</TituloCadastro>
          <label htmlFor="nome">
            Nome:
            <CampoCadastro
              id="nome"
              placeholder="Insira o nome do contato"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </label>
          <label htmlFor="apelido">
            Apelido:
            <CampoCadastro
              placeholder="Insira o apelido do contato"
              id="apelido"
              type="text"
              value={apelido}
              onChange={(e) => setApelido(e.target.value)}
            />
          </label>
          <label htmlFor="foto">
            Foto do contato:
            <CampoCadastro
              type="file"
              id="foto"
              onChange={handleImagemChange}
            />
          </label>
          <label htmlFor="email">
            Email:
            <CampoCadastro
              placeholder="Insira o email do contato"
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="telefone">
            Telefone:
            <CampoCadastro
              placeholder="Insira o telefone do contato"
              id="telefone"
              type="tel"
              value={undefined}
              onChange={(e) => setTelefone(Number(e.target.value))}
            />
          </label>
          <div>
            <label htmlFor="sobre">
              Sobre:
              <CampoTextarea
                id="sobre"
                placeholder="Insira a descrição para o contato"
                as="textarea"
                value={sobre}
                onChange={(e) => setSobre(e.target.value)}
              />
            </label>
          </div>
        </FormularioCadastro>
        <PreviewContainer>
          <TituloCadastro>Seu novo contato</TituloCadastro>
          <ContainerCardPreview>
            {imagemPreview && (
              <FotoContato src={imagemPreview} alt="Imagem do Contato" />
            )}
            <div>
              <NomeContato>{nome}</NomeContato>
              <ApelidoPreview>{apelido}</ApelidoPreview>
            </div>
            <NomeContato>{telefone}</NomeContato>
            <InfoContato>{email}</InfoContato>
          </ContainerCardPreview>
          <ContainerBotoes>
            <BotaoSalvar type="button" onClick={handleSalvar}>
              Salvar
            </BotaoSalvar>
            <BotaoFechar type="button" onClick={closeModal}>
              Fechar
            </BotaoFechar>
          </ContainerBotoes>
        </PreviewContainer>
      </ContainerCadastro>
    </Modal>
  )
}

export default ModalContato
