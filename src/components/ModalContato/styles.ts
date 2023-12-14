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
  overflow-y: auto;
  @media (max-width: 768px) {
  }
`

export const FormularioCadastro = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-color: ${variaveis.corDeFundoCard};
  padding: 10px;

  width: 100%;
  @media (max-width: 768px) {
    padding: 4px;
    height: 70vh;
  }

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
    @media (max-width: 768px) {
      flex-direction: column;
      margin-bottom: 0;
      margin-top: 10px;
      width: 100%;
      padding: 4px;
      font-size: 16px;
    }
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
  @media (max-width: 768px) {
    margin: 0;
    margin-top: 10px;
    font-size: 24px;
  }
`

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 150px;
  width: 80%;
  @media (max-width: 768px) {
    margin: 0;
    height: 30vh;
  }
`
export const ContainerCardPreview = styled(ContainerCard)`
  width: 100%;
  @media (max-width: 768px) {
    min-height: 100%;
    min-width: 100%;
    width: auto;
    height: auto;
  }
  h3 {
    margin: 0 2vw;
    @media (max-width: 768px) {
      margin: 0;
    }
  }

  p {
    margin-right: 20px;
    @media (max-width: 768px) {
      margin: 0;
      font-size: 14px;
    }
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
  @media (max-width: 768px) {
    margin-left: 0;
  }
`

export const CampoCadastro = styled(Campo)`
  border-radius: 20px;
  width: 100%;
  margin-left: 1vw;
  @media (max-width: 768px) {
    margin-left: 0;
  }
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.corBotaoAdicionar};
  padding: 8px;
  margin-right: 0;
  width: 40%;
  font-size: 18px;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`

export const BotaoFechar = styled(BotaoSalvar)`
  background-color: ${variaveis.corBotaoFechar};
`
export const ContainerBotoes = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
  @media (max-width: 768px) {
    display: block;
  }
`
