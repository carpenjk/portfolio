import styled from 'styled-components';
import { breakpoint } from '@carpenjk/prop-x/css';
import { Content } from '../base/base';

const StyledHeader = styled(Content)`
  position: fixed;
  top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: env(safe-area-inset-top) env(safe-area-inset-right) 0 env(safe-area-inset-left);
  background-color: ${props=> props.theme.colors.indigo1};
  z-index: 100;

  ${breakpoint("md")`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `}
`;

const StyledInnerContainer = styled.div`
  position: relative;
  width: 100%;  
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
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
      <StyledInnerContainer>{children}</StyledInnerContainer>
    </StyledHeader>
  </header> );
};
export default Header;