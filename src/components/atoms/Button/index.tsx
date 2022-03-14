import React from 'react';
import {ButtonBase, ButtonText} from './styled';

interface IButton {
  title: string;
  onPress: () => void;
}

export default ({title, ...rest}: IButton) => (
  <ButtonBase {...rest}>
    <ButtonText>{title}</ButtonText>
  </ButtonBase>
);
