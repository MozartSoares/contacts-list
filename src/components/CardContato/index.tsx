import { FotoContato, InfoContato, NomeContato } from "../../styles";
import { ContainerCard } from "./styles";

const CardContato = () => {
  return (
    <ContainerCard>
      <FotoContato src="https://via.placeholder.com/90x90" />
      <div>
        <NomeContato>nome contato</NomeContato>
        <InfoContato>apelido</InfoContato>
      </div>
      <NomeContato>telefone contato</NomeContato>
      <InfoContato>email contato</InfoContato>
    </ContainerCard>
  );
};

export default CardContato;
