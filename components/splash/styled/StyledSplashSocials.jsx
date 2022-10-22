import styled from 'styled-components';
import { breakpoint } from '@carpenjk/prop-x/css';
import { AnimatedDiv } from '../../animation/AnimatedDiv';
export const StyledSplashSocials = styled(AnimatedDiv)`
  position: absolute;
  width: 250px;
  bottom: 20vh;
  margin: auto;
  z-index: 99;

  > ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  ${breakpoint('xl')`
    position: fixed;
    bottom: 12.5vh;
    left: 8.25vw;
    width: auto;
    height: 136px;
    
    > ul {
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
    }
  `}
`;
