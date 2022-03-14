import React from 'react';
import Container from '../../atoms/Container';
import SubTitle from '../../atoms/Subtitle';
import Title from '../../atoms/Title';

interface Props {
  title?: string;
  temperature?: number;
  subtitle?: string;
  description?: string;
}

const TemperatureHeader: React.FC<Props> = ({
  title,
  temperature,
  subtitle,
  description,
}) => (
  <Container marginTop={32} flexed>
    <Title fontSize={32} marginBottom={8}>
      {title || 'Local desconhecido'}
    </Title>
    <SubTitle marginBottom={8} fontSize={56}>
      {temperature?.toFixed(0) || '--'}°
    </SubTitle>
    <SubTitle marginBottom={8} fontSize={22}>
      {subtitle || '--'}
    </SubTitle>
    <SubTitle fontSize={22}>{description || '--'}</SubTitle>
  </Container>
);

export default TemperatureHeader;
