import React, { useState, ChangeEvent } from 'react'
import Modal from 'react-modal'
import { useDispatch } from 'react-redux'
import { v4 } from 'uuid'

import ContatoClass from '../../models/contato'
import { cadastrar } from '../../store/Contatos'

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
  const [id] = useState<string>(v4())

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
    const novoContato: ContatoClass = new ContatoClass(
      nome,
      apelido,
      email,
      telefone,
      sobre,
      id,
      foto
    )

    dispatch(cadastrar(novoContato))
    console.log(novoContato.id)
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
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Adicionar Contato"
    >
      <h2>Adicionar Contato</h2>
      <form>
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <label>
          Apelido:
          <input
            type="text"
            value={apelido}
            onChange={(e) => setApelido(e.target.value)}
          />
        </label>
        <label>
          Foto:
          <input type="file" onChange={handleImagemChange} />
          {imagemPreview && <img src={imagemPreview} alt="Imagem do Contato" />}
        </label>
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Telefone:
          <input
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(Number(e.target.value))}
          />
        </label>
        <label>
          Sobre:
          <textarea value={sobre} onChange={(e) => setSobre(e.target.value)} />
        </label>
        <button type="button" onClick={handleSalvar}>
          Salvar
        </button>
        <button type="button" onClick={closeModal}>
          Fechar
        </button>
      </form>
    </Modal>
  )
}

export default ModalContato
