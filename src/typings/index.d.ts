interface Coordinates {
  longitude: number;
  latitude: number;
}

interface MarginsEditable {
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
}

interface PaddingsEditable {
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
}

interface Weather {
  state: string;
  description: string;
  temp: number;
  temp_max: number;
  temp_min: number;
}

interface Location {
  city: string;
  state: string;
  country: string;
}

export enum ThemeType {
  DARK = 'dark',
  LIGHT = 'light',
}
