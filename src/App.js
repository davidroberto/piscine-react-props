import Header from "./Header";
import Main from "./Main";

function App() {
  const categories = [
    { id: 1, name: "Fruits" },
    { id: 2, name: "Vegetables" },
    { id: 3, name: "Dairy" },
  ];

  return (
    <div>
      <Header categoriesProp={categories} />
      <Main categoriesProp={categories} />
    </div>
  );
}

export default App;
