import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../store/selected";
import { removeUser } from "../../../store/slices/userSlice";
import { getAuth, signOut } from "firebase/auth";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import IconHero from "../../../images/svg/IconHero";
import { useEffect, useState } from "react";

import ModalLogAut from "../../Modal/ModalLogAut/ModalLogAut";
import BackdropActive from "../../Backdrop/BackdropActive";
import {
  ClientIsAuthorizedButton,
  ClientIsAuthorizedDiv,
  ClientIsAuthorizedLogOut,
  ClientIsAuthorizedName,
  ClientIsAuthorizedNameDiv,
} from "./HeaderClientIsAuthorized.Styled";
import IconHeaderLogin from "../../../images/svg/IconHeaderLogin";

const HeaderClientIsAuthorized = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const [isModalLogAut, setisModalLogAut] = useState(false);

  function logAut() {
    const auth = getAuth();
    // setPersistence(auth, inMemoryPersistence)
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        toast.success(`Sign-out successful. Goodbye!`);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
    // dispatch(logout());
  }
  const openLogAut = () => {
    setisModalLogAut(true);
  };

  const closeModal = () => {
    setisModalLogAut(false);
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
      {isModalLogAut && (
        <>
          <BackdropActive closeModal={closeModal} />
          <ModalLogAut logAut={logAut} closeModal={closeModal} />
        </>
      )}
      <ClientIsAuthorizedDiv>
        <ClientIsAuthorizedNameDiv>
          <IconHero />
          <ClientIsAuthorizedName>{user.name}</ClientIsAuthorizedName>
        </ClientIsAuthorizedNameDiv>
        <ClientIsAuthorizedButton onClick={openLogAut}>
          <IconHeaderLogin />
          <ClientIsAuthorizedLogOut>Log out</ClientIsAuthorizedLogOut>
        </ClientIsAuthorizedButton>
      </ClientIsAuthorizedDiv>
    </>
  );
};

export default HeaderClientIsAuthorized;
