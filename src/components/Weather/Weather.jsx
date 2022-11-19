import { useState } from 'react';
import axios from 'axios';
import css from '../Weather/Weather.module.css'

function Weather() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({
    data: {},
    error: false,
  });

  const toDate = () => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    const currentDate = new Date();
    const date = `${days[currentDate.getDay()]}, ${currentDate.getDate()} ${months[currentDate.getMonth()]
      }`;
    return date;
  };

  const search = async event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setQuery('');
      setWeather({ ...weather });
      const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
      const apiKey = 'cd4e0fbeb3689871cfdcc667d216ce9b';

      await axios
        .get(baseUrl, {
          params: {
            q: query,
            units: 'metric',
            appid: apiKey,
          },
        })
        .then(res => {
          setWeather({ data: res.data, error: false });
        })
        .catch(error => {
          setWeather({ ...weather, data: {}, error: true });
          setQuery('');
          console.log(error.message);
        });
    }
  };

  return (
    <>
      <h1 className={css.title}>
        Weather <span> 🌤 </span>
      </h1>
      <div>
        <input className={css.input}
          autoFocus
          type="text"
          placeholder="Search City"
          name="query"
          value={query}
          onChange={event => setQuery(event.target.value)}
          onKeyPress={search}
        ></input>
      </div>
      {weather.error && (
        <>
          <span className={css.span}>
            <span style={{ fontSize: '26px' }}> Sorry, City not found</span>
          </span>
        </>
      )}
      {weather && weather.data && weather.data.main && (
        <div>
          <div className={css.divCityName}>
            <h2>
              {weather.data.name}, <span>{weather.data.sys.country}</span>
            </h2>
          </div>
          <div className={css.divDateWrapper}>
            <span>{toDate()}</span>
          </div>
          <div className={css.divIconStyled}>
            <img
              src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
              alt={weather.data.weather[0].description}
            />
            {Math.round(weather.data.main.temp)}
            <div className={css.divDegStyled}> &deg;C </div>
          </div>
          <div className={css.divWindStyled}>
            <p>{weather.data.weather[0].description.toUpperCase()}</p>
            <p>Wind Speed: {weather.data.wind.speed}m/s</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Weather;
