import styled from "styled-components";
import { breakpoint } from "@carpenjk/prop-x/css";

export const StyledTechItem = styled.li`
  font-family: 'Comfortaa';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  color: ${props=> props.theme.colors.orange10};
  margin-left: 18px;
  margin-bottom: 18px;

  ${breakpoint('sm')`
    font-size: 14px;
  `}

  ${breakpoint('xmd')`
    font-size: 16px;  
  `}
`;