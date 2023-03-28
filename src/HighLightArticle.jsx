const HighLightArticle = ({ articlesProp }) => {
  return (
    <div>
      <h2>Article mis en avant :</h2>
      <p>{articlesProp[0].title}</p>
    </div>
  );
};

export default HighLightArticle;
