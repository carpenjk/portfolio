import styled from 'styled-components';
import { breakpoint } from '@carpenjk/prop-x/css';
import { AnimatedDiv } from '../../../animation/AnimatedDiv';

export const StyledProjectSnapshot = styled(AnimatedDiv)`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 5px;
  }

  ${breakpoint('xmd')`  
    grid-row: 1/2;
    grid-column: 1/2;
    width: 333px;
    position: absolute;
    top: 0;
    left: -9.5%;
    width: 85%;
    min-width: 333px;
    transform-origin: top left;
    transform: scale(1.3) perspective(400px) translate3d(50%, 0%, 0px);
  `}
`;