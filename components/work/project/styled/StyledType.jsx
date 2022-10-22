import { breakpoint } from "@carpenjk/prop-x/css";
import styled from "styled-components";

export const StyledType = styled.h2`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Comfortaa';
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.2em;
  color: ${props=> props.theme.colors.sand11};
  
  ${breakpoint('xmd')`
    margin: 0;
    transform: rotate(33deg);
  `}

  ${breakpoint('lg')`
  font-size: 32px;
  `}
`;