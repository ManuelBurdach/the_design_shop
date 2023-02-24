import "./Article.css";

const Article = (props) => {
  return (
    <article>
      <img src={props.imgLink} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.price}</p>
    </article>
  );
};

export default Article;
