import styled from 'styled-components';
import { breakpoint } from '@carpenjk/prop-x/css';
import { Content } from '../base/base';

const StyledHeader = styled.div`
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: env(safe-area-inset-top) env(safe-area-inset-right) 0 env(safe-area-inset-left);
  z-index: 100;

`;

const StyledHeaderBackground = styled.div`
  position: absolute;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props=> props.theme.colors.indigo1};
  opacity: 1;
`;

const StyledInnerContainer = styled(Content)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 16px 4px 8px 4px;

  ${breakpoint("md")`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px 8px;
  `}

  > :first-child{
    margin-right: 8px;
  }
`;
const Header = ({children}) => {
return ( 
  <header>
    <StyledHeader>
      <StyledHeaderBackground/>
      <StyledInnerContainer>{children}</StyledInnerContainer>
    </StyledHeader>
  </header> );
};
export default Header;