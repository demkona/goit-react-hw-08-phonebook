import axios from 'axios';

export const getNews = async () => {
  const response = await axios.get(
    'https://newsapi.org/v2/top-headlines?country=ua&category=technology&apiKey=a1d1809d7fe146168b31a26552e963b0'
  );
  return response.data;

};
