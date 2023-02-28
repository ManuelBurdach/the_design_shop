//Modul import
import { Routes, Route } from "react-router-dom";

//CSS & Component import
import "./Main.css";
import MainSectionArticle from "../MainSectionArticle/MainSectionArticle";
import Blog from "../Blog/Blog";

//Main Component
const Main = () => {
  return (
    <main>
      {/* Routing */}
      <Routes>
        <Route path="/" element={<MainSectionArticle />} />
        <Route path="/shop/:category" element={<MainSectionArticle />} />
        <Route path="/thedesignblog" element={<Blog />} />
      </Routes>
    </main>
  );
};

export default Main;
