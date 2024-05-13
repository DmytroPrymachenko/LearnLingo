import IconHeaderLogin from "../../../images/svg/IconHeaderLogin";
import {
  HeaderButtonLogin,
  HeaderButtonRegistration,
  HeaderDivAuthorization,
  HeaderSpanLogin,
} from "../Header.Styled";

const HeaderNeedAuthorization = ({ openModalLogin, openModalRegister }) => {
  return (
    <>
      <HeaderDivAuthorization>
        <HeaderButtonLogin onClick={openModalLogin}>
          <IconHeaderLogin />
          <HeaderSpanLogin>Log in</HeaderSpanLogin>
        </HeaderButtonLogin>
        <HeaderButtonRegistration onClick={openModalRegister}>
          Registration
        </HeaderButtonRegistration>
      </HeaderDivAuthorization>
    </>
  );
};

export default HeaderNeedAuthorization;
