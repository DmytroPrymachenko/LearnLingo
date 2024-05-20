import { useSelector } from "react-redux";
import {
  LogAutButtonClose,
  LogAutButtonDiv,
  LogAutButtonlogAut,
  LogAutDiv,
  LogAutH1,
  LogAutSpan,
  ModalLogAutDiv,
} from "./ModalLogAut.Styled";
import { selectUserName } from "../../../store/selected";

const ModalLogAut = ({ logAut, closeModal }) => {
  const userName = useSelector(selectUserName);

  return (
    <ModalLogAutDiv>
      <LogAutDiv>
        <LogAutH1>Привіт {userName}!</LogAutH1>
        <LogAutSpan>Ти точно бажаєш вийти з особистого кабінету?</LogAutSpan>
        <LogAutButtonDiv>
          <LogAutButtonClose onClick={closeModal}>Close</LogAutButtonClose>
          <LogAutButtonlogAut onClick={logAut}>LogAut</LogAutButtonlogAut>
        </LogAutButtonDiv>
      </LogAutDiv>
    </ModalLogAutDiv>
  );
};

export default ModalLogAut;
