import React from 'react';
import {
  ActivityIndicator,
  Platform,
  StatusBar,
  useColorScheme,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {LoadingContent, ScreenDefault, ScreenIOS} from './styled';

interface Props {
  isLoading?: boolean;
  children: React.ReactNode;
}

const lightColors = ['#00BFFF', '#87CEEB'];
const darkColors = ['#483D8B', '#6959CD'];

const Screen: React.FC<Props> = ({isLoading, children}) => {
  const colorTheme = useColorScheme();

  const content = (
    <>
      <StatusBar
        backgroundColor={colorTheme === 'dark' ? '#483D8B' : '#00BFFF'}
      />
      <LinearGradient
        // eslint-disable-next-line react-native/no-inline-styles
        style={{flex: 1}}
        colors={colorTheme === 'dark' ? darkColors : lightColors}>
        {children}
      </LinearGradient>
    </>
  );

  return (
    <>
      {Platform.OS === 'ios' ? (
        //@ts-ignore
        <ScreenIOS theme={colorTheme}>{content}</ScreenIOS>
      ) : (
        //@ts-ignore
        <ScreenDefault theme={colorTheme}>{content}</ScreenDefault>
      )}
      {isLoading && (
        <LoadingContent>
          <ActivityIndicator color="#fff" size="large" />
        </LoadingContent>
      )}
    </>
  );
};

export default Screen;
