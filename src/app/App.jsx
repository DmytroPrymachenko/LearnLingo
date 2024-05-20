import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Teachers from "../pages/Teachers/Teachers";
import Favorites from "../pages/Favorites/Favorites";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../store/selected";
import { GlobalStyles } from "./App.Styled";
import { useEffect } from "react";
import { setUser } from "../store/slices/userSlice";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

function App() {
  const location = useLocation();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(
            setUser({
              user: {
                email: user.email,
                id: user.uid,
                name: user.displayName,
              },
              token: user.accessToken,
            })
          );
          // ...
        } else {
          toast.info("User is signed out");
          // User is signed out
          // ...
        }
      });
    }
  }, [dispatch, user]);

  const isHomePage = location.pathname === "/";

  return (
    <>
      <GlobalStyles isHomePage={isHomePage} />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/" element={<Home />} />
          {user ? <Route path="/favorites" element={<Favorites />} /> : null}
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;

// function App() {
//   const { isAuth } = useAuth();
//   return (
//     <>
//       <Routes>
//         {isAuth ? (
//           <Route element={<Layout />}>
//             <Route path="/teachers" element={<Teachers />} />
//             <Route path="/favorites" element={<Favorites />} />
//             <Route path="*" element={<Navigate to="/teachers" />} />
//           </Route>
//         ) : (
//           <Route path="/" element={<Home />} />
//         )}
//       </Routes>
//     </>
//   );
// }

// export default App;
