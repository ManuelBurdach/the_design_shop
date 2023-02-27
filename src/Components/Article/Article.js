//CSS import
import "./Article.css";

const Article = (props) => {
  return (
    <article
      className={props.class}
      onClick={() => {
        window.open(props.href, "_blank");
      }}
      onTouchStart={(event) => {
        console.log(event.target);
      }}
    >
      <img src={props.src} alt={props.name} />
      <h4>{props.name}</h4>
      <p>{props.price}</p>
      <h3>{props.company}</h3>
    </article>
  );
};

export default Article;
