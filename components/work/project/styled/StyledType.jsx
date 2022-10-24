import { breakpoint } from "@carpenjk/prop-x/css";
import styled from "styled-components";

export const StyledType = styled.h2`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  font-family: 'Comfortaa';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.15em;
  color: ${props=> props.theme.colors.sand11};
  
  ${breakpoint('xmd')`
    font-size: 24px;
    margin: 0;
    transform: rotate(33deg);
  `}

  ${breakpoint('lg')`
  font-size: 32px;
  `}
`;