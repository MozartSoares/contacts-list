import Perfil from "../../components/Perfil";
import { Titulo } from "../../styles";
import { Aside, ContainerTitulo } from "./styles";

const BarraLateral = () => {
  return (
    <Aside>
      <ContainerTitulo>
        <Titulo>Easy contacts</Titulo>
      </ContainerTitulo>
      <Perfil />
    </Aside>
  );
};

export default BarraLateral;
