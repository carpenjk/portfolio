
import styled from "styled-components";
import { breakpoint } from "@carpenjk/prop-x/css";
import { AnimatedDiv } from "../../../animation/AnimatedDiv";

export const StyledProjectTech = styled(AnimatedDiv)`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${breakpoint('xmd')`
  grid-row: 1/2;
  grid-column: 2/3;
  justify-self: end;
  align-self: start;
  justify-content: flex-end;
  align-items: center;
  `}
`;