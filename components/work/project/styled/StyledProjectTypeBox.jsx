import styled from 'styled-components';
import { breakpoint } from '@carpenjk/prop-x/css';
import { AnimatedDiv } from '../../../animation/AnimatedDiv';

export const StyledProjectTypeBox = styled(AnimatedDiv)`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  ${breakpoint('xmd')`  
    position: absolute;
    grid-row: 1/2;
    grid-column: 1/2;
    width: 333px;
    top: 0;
    left: -9.5%;
    width: 85%;
    min-width: 333px;
    transform-origin: top left;
    transform: scale(1.3) perspective(400px) translate3d(50%, 0%, 0px);
    background: ${props=> props.theme.colors.indigo1};

    &::before {
      content: "";
      float: left;
      width: 1px;
      margin-left: -1px;
      padding-top: 80%;
    }
    &::after {
      content: "";
      display: table;
      clear: both;
    }
  `}
`;