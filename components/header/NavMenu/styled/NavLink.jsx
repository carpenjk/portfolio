import styled from 'styled-components';
import { breakpoint } from "@carpenjk/prop-x/css";

export default styled.a`
  display: inline-block;
  font-family: 'Comfortaa';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  padding: 16px 8px;
  color: ${props=> props.theme.colors.indigo12};
  ${breakpoint('md')`
    font-size 20px;
  `}
  ${breakpoint('xmd')`
    font-size 24px;
  `}
`;