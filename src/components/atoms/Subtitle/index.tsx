import styled from 'styled-components/native';
import Title from '../Title';

const SubTitle = styled(Title)`
  font-size: ${props => (props.fontSize ? props.fontSize : 18)}px;
  font-weight: 400;
`;

export default SubTitle;
