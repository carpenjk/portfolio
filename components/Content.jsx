import styled from "styled-components";
import {breakpoint} from '@carpenjk/prop-x/css';

export default styled.div`
  width: 100%;
  ${breakpoint("md")`
    max-width: 1000px;
  `}
`;

// const Content = ({children}) => {
//   return ( <StyledContent>{children}</StyledContent> );
// };
 
// export default Content;