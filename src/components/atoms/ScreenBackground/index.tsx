import React from 'react';
import {ColorSchemeName} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  children: React.ReactNode;
  colorTheme: ColorSchemeName;
}

const lightColors = ['#00BFFF', '#87CEEB'];
const darkColors = ['#483D8B', '#6959CD'];

export default ({colorTheme, children}: Props) => {
  return (
    <LinearGradient
      // eslint-disable-next-line react-native/no-inline-styles
      style={{width: '100%', height: '100%'}}
      colors={colorTheme === 'dark' ? darkColors : lightColors}>
      {children}
    </LinearGradient>
  );
};
