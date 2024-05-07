import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Teachers from "../pages/Teachers/Teachers";
import Favorites from "../pages/Favorites/Favorites";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "hooks/use-auth";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (!user && location.pathname !== "/") {
      dispatch();
    }
  }, [dispatch, user, location.pathname]);

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          {user ? (
            <>
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/favorites" element={<Favorites />} />
            </>
          ) : (
            <Route path="/" element={<Home />} />
          )}
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
