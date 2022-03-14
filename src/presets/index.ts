import {MarginsEditable, PaddingsEditable} from '../typings';

export const margins = (props: MarginsEditable) => `
  ${props.marginTop ? `margin-top: ${props.marginTop}px;` : ''}
  ${props.marginBottom ? `margin-bottom: ${props.marginBottom}px;` : ''}
  ${props.marginLeft ? `margin-left: ${props.marginLeft}px;` : ''}
  ${props.marginRight ? `margin-right: ${props.marginRight}px;` : ''}
`;

export const paddings = (props: PaddingsEditable) => `
  ${props.paddingTop ? `padding-top: ${props.paddingTop}px;` : ''}
  ${props.paddingBottom ? `padding-bottom: ${props.paddingBottom}px;` : ''}
  ${props.paddingLeft ? `padding-left: ${props.paddingLeft}px;` : ''}
  ${props.paddingRight ? `padding-right: ${props.paddingRight}px;` : ''}
`;
