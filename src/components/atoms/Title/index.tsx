import styled from 'styled-components/native';
import {margins, paddings} from '../../../presets';
import {MarginsEditable, PaddingsEditable} from '../../../typings';

interface Props extends PaddingsEditable, MarginsEditable {
  fontSize?: number;
}

const Title = styled.Text<Props>`
  color: white;
  font-size: ${props => (props.fontSize ? props.fontSize : 24)}px;
  font-weight: 600;
  ${props => margins(props)}
  ${props => paddings(props)}
`;

export default Title;
