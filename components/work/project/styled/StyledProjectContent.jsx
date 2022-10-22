import styled from "styled-components";
import { breakpoint } from "@carpenjk/prop-x/css";

export const StyledProjectContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2px;
  overflow: hidden;
  ${breakpoint('xmd')`
    
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    height: 602px;
  `}
`;