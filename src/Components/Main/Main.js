import "./Main.css";
import { Routes, Route } from "react-router-dom";
import Home from "../../Pages/Home/Home";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a" element={"A"} />
      </Routes>
    </main>
  );
};

export default Main;
