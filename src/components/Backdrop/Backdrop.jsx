import { BackdropDiv } from "./Backdrop.Styled";

const Backdrop = ({ closeModal }) => {
  return <BackdropDiv onClick={closeModal} />;
};

export default Backdrop;
