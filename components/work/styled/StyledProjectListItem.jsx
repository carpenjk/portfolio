import styled from "styled-components";
import { breakpoint } from "@carpenjk/prop-x/css";
export const StyledProjectListItem = styled.li`
  position: relative;
  width: 100%;
  margin-top: 90px;
  margin-bottom: 180px;
  
  :last-child {
    margin-bottom: 0;
  }

  ${breakpoint('xmd')`
    
    margin-top: 90px;
    margin-bottom: 225px;
    }
    :last-child {
      margin-botom: 0;  
    }
  `}
`;