import ArticlesList from "./ArticlesList";
import HighLightArticle from "./HighLightArticle";

function App() {
  const articles = [
    {
      title: "React Hooks",
      content: "React Hooks are awesome!",
    },
    {
      title: "React Context",
      content: "React Context is awesome!",
    },
    {
      title: "React Router",
      content: "React Router is awesome!",
    },
  ];

  return (
    <div>
      <ArticlesList articlesProp={articles} />
      <HighLightArticle articlesProp={articles} />
    </div>
  );
}

export default App;
