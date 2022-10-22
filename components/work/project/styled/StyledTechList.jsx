import styled from "styled-components";
import { breakpoint } from "@carpenjk/prop-x/css";

export const StyledTechList = styled.ul`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 32px 8px;
  margin-left: -18px;
  margin-bottom: -18px;

  ${breakpoint('xmd')`
    height: 75px;
    width: 120.7%;
    max-width: calc(200% - 319px);
    font-size: 16px;
    padding: 28.5px 16px;
    margin: 0;
    justify-content: flex-end;
    align-items: center;
  `}
`;