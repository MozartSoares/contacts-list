import styled from 'styled-components'
import { Botao, Campo, InfoContato, Titulo } from '../../styles'
import variaveis from '../../styles/variaveis'
import { ContainerCard } from '../CardContato/styles'

export const ContainerCadastro = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${variaveis.corDeFundoMain};
`
export const FormularioCadastro = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-color: ${variaveis.corDeFundoCard};
  padding: 10px;
  white-space: nowrap;
  width: 100%;

  label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2vh;
    border-radius: 20px;
    padding: 8px;
    width: 30vw;
    font-family: ${variaveis.fonteSecundaria};
    color: #000;
    background-color: ${variaveis.corDeFundoMain};
    font-size: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const TituloCadastro = styled(Titulo)`
  margin-top: 15px;
  margin-bottom: 30px;
  text-decoration: underline;
`

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 150px;
  width: 80%;
`
export const ContainerCardPreview = styled(ContainerCard)`
  width: 100%;
  h3 {
    margin: 0 2vw;
  }

  p {
    margin-right: 20px;
  }
`
export const ApelidoPreview = styled(InfoContato)`
  margin: 0 2vw;
`
export const CampoTextarea = styled(Campo)`
  height: 8vh;
  width: 100%;
  resize: none;
  margin-left: 1vw;
`

export const CampoCadastro = styled(Campo)`
  border-radius: 20px;
  width: 100%;
  margin-left: 1vw;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.corBotaoAdicionar};
  padding: 8px;
  margin-right: 0;
  width: 40%;
  font-size: 18px;
`

export const BotaoFechar = styled(BotaoSalvar)`
  background-color: ${variaveis.corBotaoFechar};
`
export const ContainerBotoes = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
`
