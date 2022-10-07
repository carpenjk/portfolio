import styled from 'styled-components';
import {breakpoint, getProp} from '@carpenjk/prop-x/css';
import { AnimatedDiv } from '../../../animation/AnimatedDiv';
export const AnimatedFilters = styled(AnimatedDiv)`
  position ${props=> props.position};
  top: ${getProp('top')};
  bottom: ${getProp('bottom')};
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: ${props=> props.position === 'absolute' ? '7px' : '0px'};
  z-index: 99;
  background: ${props=> props.theme.colors.indigo3};
  font-size: inherit;

  ${breakpoint('md')`
    top: ${getProp('top')};
    bottom: ${getProp('bottom')};
  `}
`;