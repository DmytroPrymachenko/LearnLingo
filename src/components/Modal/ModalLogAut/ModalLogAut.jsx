import { ModalLogAutDiv } from "./ModalLogAut.Styled";

const ModalLogAut = ({ logAut }) => {
  return (
    <ModalLogAutDiv>
      ModalLogAut<button onClick={logAut}>logAut</button>
    </ModalLogAutDiv>
  );
};

export default ModalLogAut;
