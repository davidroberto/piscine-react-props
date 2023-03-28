const ArticlesList = ({ articlesProp }) => {
  return (
    <div>
      {articlesProp.map((article) => (
        <h2>{article.title}</h2>
      ))}
    </div>
  );
};

export default ArticlesList;
