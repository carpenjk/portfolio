import { breakpoint } from "@carpenjk/prop-x/css";
import styled from "styled-components";
export default styled.div`
  display: inline-block;
  padding: 8px;
  background-color: ${props=> props.theme.colors.orange6};
  font-family: 'Comfortaa';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: ${props=> props.theme.colors.orange12};
  border-radius: 5px;

  ${breakpoint('md')`
    font-size: 16px;
  `}
`;