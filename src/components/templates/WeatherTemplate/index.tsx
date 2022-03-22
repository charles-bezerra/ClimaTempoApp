import React from 'react';

//services
import {getGeo} from '../../../services/geo.service';
import {getWeather} from '../../../services/weather.service';

import {Coordinates, Location, Weather} from '../../../typings';
import getNameWeater from '../../../util/getNameWeater';

import Button from '../../atoms/Button';
import Container from '../../atoms/Container';
import Screen from '../../molecules/Screen';
import TemperatureHeader from '../../molecules/TemperatureHeader';

interface Props {
  coordinates?: Coordinates;
  updateCoordinates: () => void;
}

const WeatherTemplate: React.FC<Props> = ({coordinates, updateCoordinates}) => {
  const [location, setLocation] = React.useState<Location>();
  const [weather, setWeather] = React.useState<Weather>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const callWeather = React.useCallback((cdn: Coordinates) => {
    getWeather(cdn).then(data => {
      if (data) {
        setWeather({
          state: data.weather[0].main,
          description: data.weather[0].description,
          temp: data.main.temp - 273,
          temp_max: data.main.temp_max - 273,
          temp_min: data.main.temp_min - 273,
        });
      }
    });
  }, []);

  const callGeo = React.useCallback(
    (cdn: Coordinates) => {
      setIsLoading(true);

      getGeo(cdn)
        .then(data => {
          if (data) {
            setLocation({
              city: data[0].name,
              state: data[0].state,
              country: data[0].country,
            });
          }

          callWeather(cdn);
        })
        .finally(() => {
          setTimeout(() => {
            setIsLoading(false);
          }, 500);
        });
    },
    [callWeather],
  );

  React.useEffect(() => {
    if (coordinates) {
      callGeo(coordinates);
    }
  }, [callGeo, coordinates]);

  return (
    <Screen isLoading={isLoading}>
      <TemperatureHeader
        title={location ? `${location.city}, ${location.country}` : undefined}
        temperature={weather?.temp}
        subtitle={weather ? getNameWeater(weather.state) : undefined}
        description={`Max.: ${weather?.temp_max.toFixed(
          0,
        )}° Min.: ${weather?.temp_min.toFixed(0)}°`}
      />
      <Container paddingTop={32} paddingBottom={32}>
        <Button title="Atualizar" onPress={updateCoordinates} />
      </Container>
    </Screen>
  );
};

export default WeatherTemplate;
