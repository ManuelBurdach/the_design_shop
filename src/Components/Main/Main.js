//Modul import
import { Routes, Route } from "react-router-dom";

//CSS & Component import
import "./Main.css";
import MainSectionArticle from "../MainSectionArticle/MainSectionArticle";

//Main Component
const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<MainSectionArticle />} />
        <Route path="/shop1" element={<MainSectionArticle />} />
        <Route path="/shop2" element={<MainSectionArticle />} />
        <Route path="/shop3" element={<MainSectionArticle />} />
        <Route path="/shop4" element={<MainSectionArticle />} />
        <Route path="/shop5" element={<MainSectionArticle />} />
        <Route path="/shop6" element={<MainSectionArticle />} />
      </Routes>
    </main>
  );
};

export default Main;
