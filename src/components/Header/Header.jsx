import { Link } from "react-router-dom";
import IconHeader from "../../images/svg/IconHeader";
import { HeaderDivLink, HeaderLink, HeaderSection } from "./Header.Styled";

import { useEffect, useState } from "react";
import ModalRegister from "../Modal/ModalAuth/ModalRegister";
import ModalLogin from "../Modal/ModalAuth/ModalLogin";
import HeaderNeedAuthorization from "./HeaderNeedAuthorization/HeaderNeedAuthorization";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/selected";

import Backdrop from "../Backdrop/Backdrop";
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
    setIsModalRegister(false);
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {isModalLogin && (
        <>
          <Backdrop closeModal={closeModal} />
          <ModalLogin closeModal={closeModal} />
        </>
      )}

      {isModalRegister && (
        <>
          <Backdrop closeModal={closeModal} />
          <ModalRegister closeModal={closeModal} />
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
          {user && (
            <HeaderLink
              to="/favorites"
              aria-label="Teachers"
              style={{ textDecoration: "none" }}
            >
              Favorites
            </HeaderLink>
          )}
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
