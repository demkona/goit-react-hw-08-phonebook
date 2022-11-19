import News from 'components/News/News';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';

export default function HomePage() {


  return (
    <>
      <h1>
        Hello, I'm your Phone Book{' '}
        <BsFillJournalBookmarkFill />
      </h1>
      <News />
    </>
  );
};
