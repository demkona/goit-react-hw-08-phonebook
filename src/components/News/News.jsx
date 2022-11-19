import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getNews } from 'service/service';
import css from '../News/News.module.css'

export const News = () => {
  const [news, setNews] = useState(null);

  useEffect(() => {
    getNews().then(data => { setNews(data); }).catch(console.log);
  }, []);

  if (!news) {
    return null;
  }
  const oneNews = news.articles
  console.log(oneNews)

  return (
    <>
      <ul className={css.newItem} >
        {oneNews.map(({ title, url, urlToImage }) => (<li key={title} >
          <Link className={css.link} to={url} target="_blank">
            {title}
            <img src={urlToImage} alt={title} width='300' />
          </Link>
        </li>))}

      </ul>
    </>
  )
}
export default News;
