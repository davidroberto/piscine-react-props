import HighLightArticle from "./HighLightArticle";
import ListArticles from "./ListArticles";

function App() {
  const articles = [
    {
      id: 1,
      title: "React Hooks",
      content: "React Hooks are awesome!",
    },
    {
      id: 2,
      title: "React Context",
      content: "React Context is awesome!",
    },
    {
      id: 3,
      title: "React Router",
      content: "React Router is awesome!",
    },
  ];

  return (
    <div>
      <ListArticles articlesProp={articles} />
      <HighLightArticle articlesProp={articles} />
    </div>
  );
}

export default App;
