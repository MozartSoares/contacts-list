import { FotoContato, InfoContato, NomeContato } from "../../styles";
import { dataSvg, descSvg, foneSvg } from "../../utils/svg";
import * as S from "./styles";

const Perfil = () => {
  return (
    <S.Container>
      <FotoContato src="https://via.placeholder.com/90x90" alt="" />
      <NomeContato>Mozart Soares</NomeContato>
      <InfoContato>mozartarmstrong@gmail.com</InfoContato>
      <S.InfosContainer>
        <InfoContato>{dataSvg} data de nascimento</InfoContato>
        <InfoContato>{foneSvg} telefone</InfoContato>
        <InfoContato>{descSvg} descrição</InfoContato>
      </S.InfosContainer>
    </S.Container>
  );
};
export default Perfil;
