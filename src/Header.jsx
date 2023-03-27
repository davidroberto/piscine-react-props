const Header = ({ categoriesProp }) => {
  return (
    <header>
      <h1>{categoriesProp[0].name}</h1>
    </header>
  );
};

export default Header;
