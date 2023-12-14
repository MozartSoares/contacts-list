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

  @media (max-width: 768px) {
    flex-direction: column;
    height: 25vh;
  }
`

export const TituloLista = styled(Titulo)`
  font-size: 24px;
  margin-left: 34px;
  @media (max-width: 768px) {
    margin: 15px 0 20px 0;
  }
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
  @media (max-width: 768px) {
    margin: 10px 0 20px 0;
    height: 68px;
    width: 68px;
  }
`
