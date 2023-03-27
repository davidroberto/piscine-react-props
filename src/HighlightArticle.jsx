const HighLightArticle = ({ articles }) => {
  return (
    <div>
      <h3>Article préféré des lecteurs : </h3>
      {articles[0].title}
    </div>
  );
};

export default HighLightArticle;
