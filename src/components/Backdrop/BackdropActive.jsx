import { BackdropActiveDiv } from "./BackdropActive.Styled";

const BackdropActive = ({ closeModal }) => {
  return <BackdropActiveDiv onClick={closeModal} />;
};

export default BackdropActive;
