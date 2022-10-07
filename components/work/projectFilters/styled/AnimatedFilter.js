import styled from 'styled-components';
import { breakpoint } from '@carpenjk/prop-x/css';
import { AnimatedDiv } from '../../../animation/AnimatedDiv';
export const AnimatedFilter = styled(AnimatedDiv)`
font-size: 12px;
${breakpoint('md')`
  font-size: 16px;
`}
`;
