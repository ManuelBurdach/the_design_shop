//Modul import
import { Routes, Route } from "react-router-dom";

//CSS & Component import
import "./Main.css";
import MainSectionArticle from "../MainSectionArticle/MainSectionArticle";
import Blog from "../Blog/Blog";
import WorkWithUs from "../Workwithus/Workwithus";
import Subscribe from "../Subscribe/Subscribe";

//Main Component
const Main = () => {
  return (
    <main>
      {/* Routing */}
      <Routes>
        <Route path="/" element={<MainSectionArticle />} />
        <Route path="/shop/:category" element={<MainSectionArticle />} />
        <Route path="/thedesignblog" element={<Blog />} />
        <Route path="/workwithus" element={<WorkWithUs />} />
        <Route path="/subscribe" element={<Subscribe />} />
      </Routes>
    </main>
  );
};

export default Main;
