//CSS import
import "./MainSectionArticle.css";

//Component import
import Article from "../Article/Article";

//Data import
import data from "../../Data/data";

const MainSectionArticle = () => {
  return (
    <section>
      {data.map((item, i) => {
        return (
          <Article
            key={`Article${i}`}
            class={item.className}
            name={item.name}
            company={item.company}
            price={item.price}
            src={item.src}
          />
        );
      })}
    </section>
  );
};

export default MainSectionArticle;
