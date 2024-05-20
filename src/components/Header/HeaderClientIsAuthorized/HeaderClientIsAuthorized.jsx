import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../store/selected";
import { removeUser } from "../../../store/slices/userSlice";
import { getAuth, signOut } from "firebase/auth";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import IconHero from "../../../images/svg/IconHero";
import { useState } from "react";

import ModalLogAut from "../../Modal/ModalLogAut/ModalLogAut";
import BackdropActive from "../../Backdrop/BackdropActive";

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
  return (
    <>
      {isModalLogAut && (
        <>
          <BackdropActive closeModal={closeModal} />
          <ModalLogAut logAut={logAut} closeModal={closeModal} />
        </>
      )}
      <div>
        <IconHero />
        {user.name}
        <button onClick={openLogAut}>Вийти</button>
      </div>
    </>
  );
};

export default HeaderClientIsAuthorized;
