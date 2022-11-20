// import News from 'components/News/News';
// import Weather from 'components/Weather/Weather';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';
import css from '../pages/pages.module.css'

export default function HomePage() {
  return (
    <>
      <h1 className={css.titleHome}>
        Hello, I'm your Phone Book{' '}
        <BsFillJournalBookmarkFill />
      </h1>
      {/* <Weather />
      <News /> */}
    </>
  );
};
