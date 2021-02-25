import articleStyle from '../styles/Article.module.css';
import ArticleItems from './ArticleItems';

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyle.grid}>
      <ArticleItems articles={articles} />
    </div>
  );
};

export default ArticleList;
