import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../store/selected";
import { removeUser } from "../../../store/slices/userSlice";
import { getAuth, signOut } from "firebase/auth";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import IconHero from "../../../images/svg/IconHero";

const HeaderClientIsAuthorized = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();

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

  return (
    <div>
      <IconHero />
      {user.name}
      <button onClick={logAut}>Вийти</button>
    </div>
  );
};

export default HeaderClientIsAuthorized;
