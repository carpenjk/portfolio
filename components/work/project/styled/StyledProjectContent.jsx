import styled from "styled-components";
import { breakpoint } from "@carpenjk/prop-x/css";

export const StyledProjectContent = styled.div`
  position: relative;
  display: flex;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr;
  width: 100%;
  max-width: 100%;
  flex-direction: column;
  justify-items: center;
  justify-content: flex-start;
  align-items: center;
  padding: 2px;
  overflow: hidden;
  ${breakpoint('xmd')`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    height: 602px;
  `}
`;