import { configureStore } from '@reduxjs/toolkit'
import contatosReducer from './Contatos'
import buscaReducer from './Busca'

const Store = configureStore({
  reducer: {
    contatos: contatosReducer,
    busca: buscaReducer
  }
})

export type RootReducer = ReturnType<typeof Store.getState>

export default Store
