import {ColorSchemeName} from 'react-native';
import styled from 'styled-components/native';

interface Props {
  theme: ColorSchemeName;
}

export const LoadingContent = styled.View`
  position: absolute;
  z-index: 2;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ScreenIOS = styled.SafeAreaView<Props>`
  height: 100%;
  width: 100%;
  background-color: ${props =>
    props.theme === 'dark' ? '#483D8B' : '#00BFFF'};
`;

export const ScreenDefault = styled.View<Props>`
  height: 100%;
  width: 100%;
  background-color: white;
`;
