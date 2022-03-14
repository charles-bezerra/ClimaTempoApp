import axios from 'axios';
import {Coordinates} from '../typings';
import {WEATHER_API_KEY} from '@env';

const ApiGeo = axios.create({
  baseURL: 'https://api.openweathermap.org/geo/1.0/reverse',
});

export const getGeo = async ({latitude, longitude}: Coordinates) => {
  try {
    const response = await ApiGeo.get('', {
      params: {
        lat: latitude,
        lon: longitude,
        limit: 10,
        appid: WEATHER_API_KEY,
      },
    });
    return response.data;
  } catch (e: any) {
    return null;
  }
};
