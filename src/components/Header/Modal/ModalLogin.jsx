import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";
import { setUser } from "store/slices/userSlise";
import { useState } from "react";

const ModalLogin = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { push } = useHistory();

  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
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
        push("/teachers");
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
              value={pass}
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
