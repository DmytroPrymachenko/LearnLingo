import { Link } from "react-router-dom";
import IconHeader from "../../images/svg/IconHeader";
import {
  Backdrop,
  HeaderButtonLogin,
  HeaderButtonRegistration,
  HeaderDivAuthorization,
  HeaderDivLink,
  HeaderLink,
  HeaderSection,
  HeaderSpanLogin,
} from "./Header.Styled";
import IconHeaderLogin from "../../images/svg/IconHeaderLogin";
import { useState } from "react";
import ModalRegister from "./Modal/ModalRegister";
import ModalLogin from "./Modal/ModalLogin";

const Header = () => {
  const [isModalLogin, setIsModalLogin] = useState(false);
  const [isModalRegister, setIsModalRegister] = useState(false);

  const openModalLogin = () => {
    setIsModalLogin((prevState) => !prevState);
  };
  const openModalRegister = () => {
    setIsModalRegister((prevState) => !prevState);
  };

  return (
    <>
      {isModalLogin && (
        <>
          <Backdrop />
          <ModalLogin />
        </>
      )}

      {isModalRegister && (
        <>
          <Backdrop />
          <ModalRegister />
        </>
      )}
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
            aria-label="Home"
            style={{ textDecoration: "none" }}
          >
            Home
          </HeaderLink>
          <HeaderLink
            to="/teachers"
            aria-label="Teachers"
            style={{ textDecoration: "none" }}
          >
            Teachers
          </HeaderLink>
        </HeaderDivLink>
        <HeaderDivAuthorization>
          <HeaderButtonLogin onClick={openModalLogin}>
            <IconHeaderLogin />
            <HeaderSpanLogin>Log in</HeaderSpanLogin>
          </HeaderButtonLogin>
          <HeaderButtonRegistration onClick={openModalRegister}>
            Registration
          </HeaderButtonRegistration>
        </HeaderDivAuthorization>
      </HeaderSection>
    </>
  );
};

export default Header;
