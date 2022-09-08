import styled from 'styled-components';
import { breakpoint } from '@carpenjk/prop-x/css';

const StyledFooter = styled.div`
  position: fixed;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  z-index: 100;

  ${breakpoint("md")`
    bottom: 99999;
  `}
`;
const Header = ({children}) => {
return ( <StyledFooter>{children}</StyledFooter> );
};
export default Header;