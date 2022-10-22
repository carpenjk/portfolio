import styled from "styled-components";
import { breakpoint } from "@carpenjk/prop-x/css";

export const StyledProjectLinkList = styled.ul`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 14px;
  max-width: 500px;

  ${breakpoint('xmd')`
    grid-template-columns: 1fr;
  `}
`;