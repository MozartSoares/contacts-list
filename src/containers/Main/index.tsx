import CardContato from "../../components/CardContato";
import { addSvg } from "../../utils/svg";
import { Header, TituloLista } from "./styles";

const Main = () => {
  return (
    <main>
      <Header>
        <TituloLista>Lista de contatos</TituloLista>
        <button type="button">{addSvg} Criar novo contato</button>
      </Header>
      <div>
        <ul>
          <CardContato />
        </ul>
        <ul>
          <CardContato />
        </ul>
        <ul>
          <CardContato />
        </ul>
        <ul>
          <CardContato />
        </ul>
        <ul>
          <CardContato />
        </ul>
      </div>
    </main>
  );
};

export default Main;
