import News from 'components/News/News';
import { useState, useEffect } from 'react';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';
import { getNews } from 'service/service';


export default function HomePage() {
  const [news, setNews] = useState(null);

  useEffect(() => {
    getNews()
      .then(data => {
        setNews(data);
      })
  }, []);

  console.log(news)
  return (
    <div>
      <h1>
        Hello, I'm your Phone Book{' '}
        <BsFillJournalBookmarkFill />
      </h1>
      <News news={news} />
    </div>
  );
};
