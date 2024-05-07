import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Teachers from "../pages/Teachers/Teachers";
import Favorites from "../pages/Favorites/Favorites";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/teachers" element={<Teachers />} />
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
