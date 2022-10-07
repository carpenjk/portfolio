import { breakpoint } from "@carpenjk/prop-x/css";
import styled from "styled-components";
export const FiltersWrapper = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 87px;

  ${breakpoint('md')`
    height: 104px;
  `}
`;