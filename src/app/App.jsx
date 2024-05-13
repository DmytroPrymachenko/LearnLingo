import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Teachers from "../pages/Teachers/Teachers";
import Favorites from "../pages/Favorites/Favorites";
import { useSelector } from "react-redux";
import { selectUser } from "../store/selected";
import { GlobalStyles } from "./App.Styled";

function App() {
  const location = useLocation();
  const user = useSelector(selectUser);
  console.log(user);

  const isHomePage = location.pathname === "/";

  return (
    <>
      <GlobalStyles isHomePage={isHomePage} />
      <Routes>
        <Route element={<Layout />}>
          <>
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/" element={<Home />} />
          </>

          <Route path="/favorites" element={<Favorites />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
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
