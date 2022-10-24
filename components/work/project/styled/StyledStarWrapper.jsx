import { breakpoint } from "@carpenjk/prop-x/css";
import styled from "styled-components";

export const StyledStarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 8px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;

  ${breakpoint('xmd')`
    padding-left: 16px;
    width: 28px;
    height: 28px;
  `}
`;