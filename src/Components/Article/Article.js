//CSS import
import "./Article.css";

const Article = (props) => {
  return (
    <article
      className={props.class}
      onClick={() => {
        window.open(props.href, "_blank");
      }}
    >
      <img src={props.src} alt={props.name} />
      <h4>{props.name}</h4>
      <h3>{props.company}</h3>
      <p>{props.price}</p>
    </article>
  );
};

export default Article;
