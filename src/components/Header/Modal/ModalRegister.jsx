import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../../store/slices/userSlice";
import { useState } from "react";

const ModalRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [name, setName] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    const auth = getAuth();
    console.log(auth);
    createUserWithEmailAndPassword(auth, email, password)
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
    <div>
      <div>
        <form>
          <input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
          />
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
          {/* <input
            type="password"
            value={password}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="confirm Password"
          /> */}
          <button onClick={handleRegister}>Zaloginetsy</button>
        </form>
      </div>
    </div>
  );
};

export default ModalRegister;
