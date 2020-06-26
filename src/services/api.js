import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'd34b79d5380d1a01783de4172552cdb9';

export const fetchWeather = async query => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: API_KEY,
    },
  });

  return data;
};
