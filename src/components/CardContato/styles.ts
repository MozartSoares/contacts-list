import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Botao } from '../../styles'

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

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 18px 5px;
    max-height: fit-content;
    text-align: center;
    align-items: center;
    padding: 20px;
    width: 90%;
    @media (max-width: 768px) {
      min-height: 100%;
      height: auto;
      width: auto;
      overflow: auto;
    }
  }
`

export const BotaoRemover = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    margin-top: 10px;
    width: 20%;
  }
`
export const BotaoVisualizar = styled(Botao)`
  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 16px;
    width: 100%;
  }
`
