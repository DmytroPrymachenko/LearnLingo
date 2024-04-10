import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../components/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
