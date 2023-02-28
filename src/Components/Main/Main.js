//Modul import
import { Routes, Route } from "react-router-dom";

//CSS & Component import
import "./Main.css";
import MainSectionArticle from "../MainSectionArticle/MainSectionArticle";

//Main Component
const Main = () => {
  return (
    <main>
      {/* Routing */}
      <Routes>
        <Route path="/" element={<MainSectionArticle />} />
        <Route path="/shop/:category" element={<MainSectionArticle />} />
        <Route path="/thedesignblog" element={<h2>The Design Blog</h2>} />
      </Routes>
    </main>
  );
};

export default Main;
