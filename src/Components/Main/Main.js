//Modul import
import { Routes, Route } from "react-router-dom";

//CSS & Component import
import "./Main.css";
import Home from "../../Pages/Home/Home";
import MainSectionArticle from "../MainSectionArticle/MainSectionArticle";

//Main Component
const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a" element={<MainSectionArticle />} />
      </Routes>
    </main>
  );
};

export default Main;
