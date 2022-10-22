import styled from 'styled-components';
import {breakpoint, getProp} from '@carpenjk/prop-x/css';
import { AnimatedDiv } from '../../../animation/AnimatedDiv';
export const StyledFilters = styled(AnimatedDiv)`
  position absolute;
  top: 0;
  width: 100%;
  max-width: 1100px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 99;
  background: ${props=> props.theme.colors.indigo3};
  font-size: inherit;
`;