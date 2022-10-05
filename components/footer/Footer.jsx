import styled from 'styled-components';
import { breakpoint } from '@carpenjk/prop-x/css';
import { Content } from '../base/base';

const StyledFooter = styled(Content)`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 16px;
  background-color: ${props=> props.theme.colors.indigo6};
  border-radius: 5px 5px 0 0;
  z-index: 99;
  
  ${breakpoint("md")`
    padding: 32px 24px;
    bottom: 99999;
  `}
  ${breakpoint('lg')`
    border-radius: 10px;
  `}
`;

const Footer = ({children, ...props}) => {
  return (
    <footer>
      <StyledFooter {...props}>
        {children}
      </StyledFooter>
    </footer> );
};

export default Footer;