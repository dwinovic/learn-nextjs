import articleStyle from '../styles/Article.module.css';
import Link from 'next/link';

const ArticleItems = ({ articles }) => {
  return (
    <Link href="/article/[id]" as={`/article/${articles.id}`}>
      <a className={articleStyle.card}>
        <h3>{articles.title} &rarr;</h3>
        <p>{articles.body}</p>
      </a>
    </Link>
  );
};

export default ArticleItems;
