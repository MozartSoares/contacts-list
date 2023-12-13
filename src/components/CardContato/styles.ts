import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  max-height: 90px;
  width: 97%;
  height: 100%;
  box-shadow: 0px 4px 4px;
  margin: 0 18px 25px 18px;
  background-color: ${variaveis.corDeFundoCard};
`
export const BotaoVisualizar = styled.button`
  padding: 4px 8px;
  font-size: 12px;
  font-weight: bold;
  border: none;
  color: #000;
  background-color: ${variaveis.corDeFundoHeader};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`
export const BotaoRemover = styled.button`
  color: green;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`
