import styled from 'styled-components';
import { AnimatedDiv } from '../../../animation/AnimatedDiv';
export const AnimatedBorder = styled(AnimatedDiv)`
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  border-bottom: ${props=> props.theme.colors.indigo5} solid 1px;
  opacity: 0;
`;
