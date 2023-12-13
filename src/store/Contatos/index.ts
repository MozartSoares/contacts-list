import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/contato'

type ContatoState = {
  lista: Contato[]
  contatoSelecionado: Contato | null
}

const initialState: ContatoState = {
  lista: [],
  contatoSelecionado: null
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    cadastrar: (state, action: PayloadAction<Contato>) => {
      const contatoJaExiste = state.lista.find(
        (c) => c.telefone === action.payload.telefone
      )
      if (contatoJaExiste) {
        alert('Já existe um contato com esse número')
      } else {
        const contatoNovo = {
          ...action.payload
        }
        state.lista.push(contatoNovo)
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state.lista = state.lista.filter((c) => c.telefone !== action.payload)
    },
    selecionarContato: (state, action: PayloadAction<Contato | null>) => {
      console.log(action.payload)
      state.contatoSelecionado = action.payload
    },
    editarContato: (state, action: PayloadAction<Contato>) => {
      const contatoEditado = action.payload
      console.log('Contato editado:', contatoEditado.id)
      const indexContato = state.lista.findIndex(
        (c) => c.id === contatoEditado.id
      )

      console.log(contatoEditado.id)

      if (indexContato !== -1) {
        state.lista = state.lista.map((c, index) =>
          index === indexContato ? contatoEditado : c
        )
        state.contatoSelecionado = { ...contatoEditado }
      }
    }
  }
})

export const { remover, cadastrar, selecionarContato, editarContato } =
  contatoSlice.actions

export default contatoSlice.reducer
