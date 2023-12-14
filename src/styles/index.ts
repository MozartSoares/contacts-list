import { styled, createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${variaveis.fontePrincipal};
    list-style: none;
}
`

export const ContainerGlobal = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 100vh;

  @media (max-width: 768px) {
    display: block;
  }
`

export const Titulo = styled.h1`
  font-family: ${variaveis.fonteSecundaria};
  white-space: nowrap;
  font-size: 35px;
`

export const FotoContato = styled.img`
  border-radius: 50%;
  max-width: 90px;
  max-height: 90px;
`

export const InfoContato = styled.p`
  color: ${variaveis.corInfoContato};
  @media (max-width: 768px) {
    margin: 10px 0;
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
  @media (max-width: 768px) {
    width: 80%;
  }
`

export const NomeContato = styled.h3`
  font-family: ${variaveis.fonteSecundaria};
`

export const Botao = styled.button`
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
  @media (max-width: 768px) {
    margin: 0;
  }
`

export default EstiloGlobal
