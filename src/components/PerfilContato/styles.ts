import styled from 'styled-components'
import { Campo } from '../../styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  row-gap: 5px;
  text-align: center;
  align-items: center;
`
export const CampoSelecionado = styled(Campo)`
  width: 100%;
  margin-top: 10px;
`
export const CampoSelecionadoTextarea = styled(CampoSelecionado)`
  height: 10vh;
  resize: none;
`
