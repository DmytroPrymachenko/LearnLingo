import { Link } from "react-router-dom";
import IconHeader from "../../images/svg/IconHeader";
import {
  Backdrop,
  HeaderDivLink,
  HeaderLink,
  HeaderSection,
} from "./Header.Styled";

import { useState } from "react";
import ModalRegister from "./Modal/ModalRegister";
import ModalLogin from "./Modal/ModalLogin";
import HeaderNeedAuthorization from "./HeaderNeedAuthorization/HeaderNeedAuthorization";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/selected";
import HeaderClientIsAuthorized from "./HeaderClientIsAuthorized/HeaderClientIsAuthorized";

const Header = () => {
  const [isModalLogin, setIsModalLogin] = useState(false);
  const [isModalRegister, setIsModalRegister] = useState(false);
  const user = useSelector(selectUser);
  const openModalLogin = () => {
    setIsModalLogin((prevState) => !prevState);
  };
  const openModalRegister = () => {
    setIsModalRegister((prevState) => !prevState);
  };

  const closeModal = () => {
    setIsModalLogin(false);
  };

  return (
    <>
      {isModalLogin && (
        <>
          <Backdrop onClick={closeModal} />
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
        {user ? (
          <HeaderClientIsAuthorized />
        ) : (
          <HeaderNeedAuthorization
            openModalLogin={openModalLogin}
            openModalRegister={openModalRegister}
          />
        )}
      </HeaderSection>
    </>
  );
};

export default Header;
