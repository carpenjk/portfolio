import styled from "styled-components";
import { breakpoint } from "@carpenjk/prop-x/css";
export const StyledProjectList = styled.ul`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    align-items: center;
    margin-top: 70px;
    width: 100%;

    > li {
      position: relative;
      width: 100%;
      margin-top: 90px;
      margin-bottom: 180px;
    }
    > li:last-child {
      margin-bottom: 0;
    }

    ${breakpoint('xmd')`
      padding: 0 48px;

      > li {
        margin-top: 90px;
        margin-bottom: 225px;
      }
      > li:last-child {
        margin-botom: 0;  
      }
    `}
`;