import axios from 'axios';
import {Coordinates} from '../typings';
import {WEATHER_API_KEY} from '@env';

const ApiWeather = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather',
});

export const getWeather = async ({latitude, longitude}: Coordinates) => {
  try {
    const response = await ApiWeather.get('', {
      params: {
        lat: latitude,
        lon: longitude,
        limit: 10,
        appid: WEATHER_API_KEY,
      },
    });
    return response.data;
  } catch (e) {
    return null;
  }
};
