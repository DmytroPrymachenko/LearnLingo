// import { useDispatch } from "react-redux";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   updateProfile,
// } from "firebase/auth";
// import { setUser } from "../../../store/slices/userSlice";
// import { useState } from "react";
// import { ModalRegisterFormDiv } from "./ModalRegister.Styled";

// const ModalRegister = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPass] = useState("");
//   const [name, setName] = useState("");
//   // const [confirmPassword, setConfirmPassword] = useState("");

//   const dispatch = useDispatch();

//   const handleRegister = (e) => {
//     e.preventDefault();
//     const auth = getAuth();

//     createUserWithEmailAndPassword(auth, email, password, name)
//       .then(({ user }) => {
//         updateProfile(auth.currentUser, {
//           displayName: name,
//         }).then(() => {
//           dispatch(
//             setUser({
//               user: {
//                 email: user.email,
//                 name: user.displayName,
//                 id: user.uid,
//               },

//               token: user.accessToken,
//             })
//           );
//         });
//       })
//       .catch(console.error);
//   };

//   return (
//     <ModalRegisterFormDiv>
//       <div>
//         <form>
//           <input
//             type="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="name"
//           />
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="email"
//           />
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPass(e.target.value)}
//             placeholder="password"
//           />
//           {/* <input
//             type="password"
//             value={password}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             placeholder="confirm Password"
//           /> */}
//           <button onClick={handleRegister}>Zaloginetsy</button>
//         </form>
//       </div>
//     </ModalRegisterFormDiv>
//   );
// };

// export default ModalRegister;

import { useDispatch } from "react-redux";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { setUser } from "../../../store/slices/userSlice";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ModalLoginButton,
  ModalLoginH1,
  ModalLoginInput,
  ModalLoginSpan,
} from "./ModalLogin.Styled";
import { useForm } from "react-hook-form";
import { ModalRegisterDiv, ModalRegisterFormDiv } from "./ModalRegister.Styled";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  name: yup
    .string()
    .max(32, "The name must contain a maximum of 32 characters")
    .required("The name is required"),
  email: yup
    .string()
    .email("Please write a valid email")
    .matches(
      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
    )
    .required("The email is required"),
  password: yup
    .string()
    .min(6, "The password must contain a minimum of 6 characters")
    .required("The password is required"),
  // repeatPassword: yup
  //   .string()
  //   .oneOf([yup.ref("password"), null], "Passwords must match")
  //   .required("You need to repeat your password"),
});

const ModalRegister = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = ({ email, password, name }) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password, name)
      .then(({ user }) => {
        updateProfile(auth.currentUser, {
          displayName: name,
        }).then(() => {
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
        });
        console.log(user);
        toast.success(`Welcome`);
        navigate("/teachers");
        closeModal();
      })

      .catch(console.error);
  };

  return (
    <ModalRegisterFormDiv>
      <ModalRegisterDiv>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalLoginH1>Registration</ModalLoginH1>
          <ModalLoginSpan>
            Thank you for your interest in our platform! In order to register,
            we need some information. Please provide us with the following
            information
          </ModalLoginSpan>
          <>
            <ModalLoginInput
              {...register("name")}
              type="name"
              id="name"
              placeholder="name"
            />
            <span>{errors.name?.message}</span>

            <ModalLoginInput
              {...register("email")}
              type="email"
              id="email"
              placeholder="Your email"
            />
            <span>{errors.email?.message}</span>
            <>
              <ModalLoginInput
                {...register("password")}
                type="password"
                id="password"
                placeholder="password"
              />
              <span>{errors.password?.message}</span>
            </>
          </>
          {/* <ModalLoginInput
            {...register("repeatPassword")}
            type="password"
            id="repeatPassword"
            placeholder="repeat password"
          />
          {errors.repeatPassword?.message} */}
          <ModalLoginButton>Sign Up</ModalLoginButton>
        </form>
      </ModalRegisterDiv>
    </ModalRegisterFormDiv>
  );
};

export default ModalRegister;
