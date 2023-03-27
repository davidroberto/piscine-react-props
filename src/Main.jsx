import HighLightArticle from "./HighlightArticle";

const Main = () => {
  const articlesFromApi = [
    {
      title: "Article 1",
    },
    {
      title: "Article 2",
    },
    {
      title: "Article 3",
    },
  ];

  return (
    <div>
      <h1>Tous les articles :</h1>
      {articlesFromApi.map((article) => (
        <h2>{article.title}</h2>
      ))}

      <HighLightArticle articles={articlesFromApi} />
    </div>
  );
};

export default Main;
