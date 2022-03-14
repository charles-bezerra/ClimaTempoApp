import styled from 'styled-components/native';
import {margins, paddings} from '../../../presets';
import {MarginsEditable, PaddingsEditable} from '../../../typings';

interface Props extends MarginsEditable, PaddingsEditable {
  flexed?: boolean;
}

const Container = styled.View<Props>`
  padding: 0px 32px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  height: auto;
  ${props => (props.flexed ? 'flex: 1;' : '')}
  ${props => margins(props)}
  ${props => paddings(props)}
`;

export default Container;
