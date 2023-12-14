import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import { BotaoSalvar } from '../../components/ModalContato/styles'

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${variaveis.corFundoAside};
`

export const ContainerTitulo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`
export const Mensagem = styled.h3`
  text-align: center;
  margin-top: 2vh;
  padding: 10px;
  border-radius: 20px;
  background-color: ${variaveis.corDeFundoCard};
  font-family: ${variaveis.fonteSecundaria};
  width: 80%;
`
export const ContainerPerfil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 2vh;
  border: solid 3px ${variaveis.corDeFundoHeader};
  border-radius: 20px;
`
export const BotaoEditar = styled(BotaoSalvar)`
  background-color: ${variaveis.corBotaoEditar};
  font-size: 16px;
  padding: 8px;
  margin-top: 2vh;
  width: 80%;
`
export const BotaoParar = styled(BotaoEditar)`
  background-color: ${variaveis.corBotaoFechar};
`
