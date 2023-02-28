//CSS import
import "./MainSectionArticle.css";

//Component import
import Article from "../Article/Article";

//Data import
import data from "../../Data/data";

//Modul import
import { useParams } from "react-router-dom";

const MainSectionArticle = () => {
  const params = useParams();
  return (
    <section id="shop">
      {data.map((item, i) => {
        return (
          //Render all Items from data.js
          item.category === params.category ||
            params.category === undefined ||
            (params.category === "weeklypicks" && item.className === "big") ? (
            <Article
              key={`Article${i}`}
              class={item.className}
              name={item.name}
              company={item.company}
              price={item.price}
              src={item.src}
              href={item.href}
            />
          ) : (
            ""
          )
        );
      })}
    </section>
  );
};

export default MainSectionArticle;
