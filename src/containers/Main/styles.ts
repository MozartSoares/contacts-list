import styled from "styled-components";
import variaveis from "../../styles/variaveis";
import { Titulo } from "../../styles";

export const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${variaveis.corDeFundoHeader};
  margin-bottom: 15px;
`;

export const TituloLista = styled(Titulo)`
  font-size: 24px;
  margin-left: 34px;
`;
