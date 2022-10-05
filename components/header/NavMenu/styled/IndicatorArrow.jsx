import styled from 'styled-components';
import { getProp, breakpoint } from '@carpenjk/prop-x/css';

export default styled.div`
display: ${getProp('display')};
  position: absolute;
  top: -41px;
  z-index: 101;
  ${breakpoint('md')`
    display: none;
  `}
`;