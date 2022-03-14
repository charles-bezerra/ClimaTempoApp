import React from 'react';
import {Alert} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {Coordinates} from '../typings';
import hasLocationPermission from '../util/hasLocationPermission';

type Return = {
  coordinates?: Coordinates;
  updateCoordinates: () => void;
};

const useCoordinates = (): Return => {
  const [coordinates, setCoordinates] = React.useState<Coordinates>();

  const onSuccess = (info: any) => {
    setCoordinates({
      latitude: info.coords.latitude,
      longitude: info.coords.longitude,
    });
  };

  const getCoordinates = React.useCallback(async () => {
    const hasPermision = await hasLocationPermission();

    if (hasPermision) {
      Geolocation.getCurrentPosition(
        onSuccess,
        e => {
          Alert.alert(`Code ${e.code}`, e.message);
        },
        {
          timeout: 20000,
          maximumAge: 1000,
          distanceFilter: 10,
          enableHighAccuracy: false,
          forceRequestLocation: true,
          forceLocationManager: true,
          showLocationDialog: true,
        },
      );
    }
  }, []);

  React.useEffect(() => {
    getCoordinates();
  }, [getCoordinates]);

  const updateCoordinates = () => {
    getCoordinates();
  };

  return {coordinates, updateCoordinates};
};

export default useCoordinates;
