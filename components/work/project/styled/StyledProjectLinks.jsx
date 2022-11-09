import styled from "styled-components";
import { breakpoint } from "@carpenjk/prop-x/css";
import { AnimatedDiv } from "../../../animation/AnimatedDiv";

export const StyledProjectLinks = styled(AnimatedDiv)`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  ${breakpoint('xmd')`
    grid-row: 2/3;
    grid-column: 1/2;
    grid-template-columns: 1fr;
    align-self: end;
    justify-self: start;
    width: auto;
  `}
`;