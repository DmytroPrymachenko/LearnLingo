import { ModalLoginButton } from "../ModalAuth/ModalLogin.Styled";
import TapSVG from "../../../images/svg/TapSVG";
import {
  AuthorizationButtonEsc,
  AuthorizationDiv,
  AuthorizationMessageContentDiv,
  AuthorizationMessageDiv,
  AuthorizationMessageH1,
  AuthorizationMessageSpan,
} from "./AuthorizationMessage.Styled";
import SVGEsc from "../../../images/svg/SVGEsc";

const AuthorizationMessage = ({
  openModalLogin,
  openModalRegister,
  closeModal,
}) => {
  return (
    <AuthorizationMessageDiv>
      <AuthorizationButtonEsc onClick={closeModal}>
        <SVGEsc />
      </AuthorizationButtonEsc>
      <AuthorizationDiv>
        <AuthorizationMessageH1>Hello, friend!</AuthorizationMessageH1>
        <AuthorizationMessageContentDiv>
          <>
            <AuthorizationMessageSpan>
              To continue using extra possibilities of service you need to log
              in by clicking the button below <TapSVG />
            </AuthorizationMessageSpan>
            <ModalLoginButton onClick={openModalLogin}>Log In</ModalLoginButton>
          </>
          <>
            <AuthorizationMessageSpan>
              Friend, in case you have not registered yet, please be sure to
              press the button below to continue <TapSVG />
            </AuthorizationMessageSpan>
            <ModalLoginButton onClick={openModalRegister}>
              Register
            </ModalLoginButton>
          </>
        </AuthorizationMessageContentDiv>
      </AuthorizationDiv>
    </AuthorizationMessageDiv>
  );
};

export default AuthorizationMessage;
