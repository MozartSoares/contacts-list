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

export const BotaoRemover = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`
