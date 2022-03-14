import React from 'react';
import WeatherTemplate from '../../components/templates/WeatherTemplate';
import useCoordinates from '../../hooks/useCoordinates';

export default () => {
  const {coordinates, updateCoordinates} = useCoordinates();

  return (
    <>
      <WeatherTemplate
        coordinates={coordinates}
        updateCoordinates={updateCoordinates}
      />
    </>
  );
};
