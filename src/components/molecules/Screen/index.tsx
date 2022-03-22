import React from 'react';
import {
  ActivityIndicator,
  Platform,
  StatusBar,
  useColorScheme,
} from 'react-native';
import ScreenBackground from '../../atoms/ScreenBackground';
import {LoadingContent, ScreenDefault, ScreenIOS} from './styled';

interface Props {
  isLoading?: boolean;
  children: React.ReactNode;
}

const Screen: React.FC<Props> = ({isLoading, children}) => {
  const colorTheme = useColorScheme();

  return (
    <>
      <ScreenBackground colorTheme={colorTheme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colorTheme === 'dark' ? '#483D8B' : '#00BFFF'}
        />
        {Platform.OS === 'ios' ? (
          //@ts-ignore
          <ScreenIOS theme={colorTheme}>{children}</ScreenIOS>
        ) : (
          //@ts-ignore
          <ScreenDefault theme={colorTheme}>{children}</ScreenDefault>
        )}
      </ScreenBackground>
      {isLoading && (
        <LoadingContent>
          <ActivityIndicator color="#fff" size="large" />
        </LoadingContent>
      )}
    </>
  );
};

export default Screen;
