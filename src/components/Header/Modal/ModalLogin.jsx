import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { setUser } from "../../../store/slices/userSlice";
import { useState } from "react";
import { ModalLoginForm } from "./ModalLogin.Styled";

const ModalLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            user: {
              email: user.email,
              name: user.displayName,
              id: user.uid,
            },

            token: user.accessToken,
          })
        );
      })
      .catch(console.error);
  };

  return (
    <>
      <ModalLoginForm>
        <h1>Log In</h1>
        <span>
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPass(e.target.value)}
          placeholder="password"
        />
        <button onClick={handleLogin}>Zaloginetsy</button>
      </ModalLoginForm>
    </>
  );
};

export default ModalLogin;
