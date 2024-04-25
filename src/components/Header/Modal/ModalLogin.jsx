import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { setUser } from "../../../store/slices/userSlice";
import { useState } from "react";

const ModalLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
      })
      .catch(console.error);
  };

  return (
    <>
      <div>
        <div>
          <form>
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
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalLogin;
