import { Link } from "react-router-dom";
import IconHeader from "../../images/svg/IconHeader";
import {
  HeaderButtonLogin,
  HeaderButtonRegistration,
  HeaderDivAuthorization,
  HeaderDivLink,
  HeaderLink,
  HeaderSection,
  HeaderSpanLogin,
} from "./Header.Styled";
import IconHeaderLogin from "../../images/svg/IconHeaderLogin";

const Header = () => {
  return (
    <>
      <HeaderSection>
        <div>
          <Link
            to="/"
            aria-label="logo and return to the main page"
            style={{ textDecoration: "none" }}
          >
            <IconHeader />
          </Link>
        </div>
        <HeaderDivLink>
          <HeaderLink
            to="/"
            aria-label="log in"
            style={{ textDecoration: "none" }}
          >
            Home
          </HeaderLink>
          <HeaderLink
            to="/signin"
            aria-label="log in"
            style={{ textDecoration: "none" }}
          >
            Teachers
          </HeaderLink>
        </HeaderDivLink>
        <HeaderDivAuthorization>
          <HeaderButtonLogin>
            <IconHeaderLogin />
            <HeaderSpanLogin>Log in</HeaderSpanLogin>
          </HeaderButtonLogin>
          <HeaderButtonRegistration>Registration</HeaderButtonRegistration>
        </HeaderDivAuthorization>
      </HeaderSection>
    </>
  );
};

export default Header;
