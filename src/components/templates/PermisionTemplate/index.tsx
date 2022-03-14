import React from 'react';

import Button from '../../atoms/Button';
import Screen from '../../atoms/Screen';

interface Props {
  getPermision: () => void;
}

const PermisionTemplate: React.FC<Props> = ({getPermision}) => {
  return (
    <Screen>
      <Button title="Permitir" onPress={getPermision} />
    </Screen>
  );
};

export default PermisionTemplate;
