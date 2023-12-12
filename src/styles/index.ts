import { styled, createGlobalStyle } from "styled-components";
import variaveis from "./variaveis";

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${variaveis.fontePrincipal};
    list-style: none;
}
`;

export const ContainerGlobal = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 100vh;
`;

export const Titulo = styled.h1`
  font-family: ${variaveis.fonteSecundaria};
  white-space: nowrap;
  font-size: 35px;
`;

export const FotoContato = styled.img`
  border-radius: 50%;
  max-width: 90px;
`;

export const InfoContato = styled.p`
  color: ${variaveis.corInfoContato};
`;

export const NomeContato = styled.h3`
  font-family: ${variaveis.fonteSecundaria};
`;

export default EstiloGlobal;
