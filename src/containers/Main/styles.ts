import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Titulo } from '../../styles'

export const ContainerMain = styled.main`
  background-color: ${variaveis.corDeFundoMain};
`

export const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${variaveis.corDeFundoHeader};
  margin-bottom: 15px;
`

export const TituloLista = styled(Titulo)`
  font-size: 24px;
  margin-left: 34px;
`
export const BotaoAdicionar = styled.button`
  height: 52px;
  width: 52px;
  margin-right: 20px;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  background-color: ${variaveis.corBotaoAdicionar};
  &:hover {
    transform: scale(1.1);
  }
`
export const Campo = styled.input`
  padding: 8px;
  background-color: #eee;
  border-radius: 8px;
  border: none;
  width: 50%;
  font-weight: bold;
  color: #000;
  border-color: #666666;
`
