import styled from "styled-components";
import { AnimatedDiv } from "../../../../animation/AnimatedDiv";
import { breakpoint } from "@carpenjk/prop-x/css";
export const StyledProjectOverview = styled(AnimatedDiv)`
  position: relative;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 40px;
  background-color: ${props=> props.theme.colors.indigo2};
  border-radius: 5px;

  > * {
    margin-top: 0px;
    margin-bottom: 64px;
  }

  > *:last-child {
    margin-bottom: 0;
  }

  ${breakpoint('xmd')`
    grid-row: 2/3;
    grid-column: 2/3;
    position: absolute;
    right: 0;
    bottom: -38px;
    width: 125%;
  `}
`;