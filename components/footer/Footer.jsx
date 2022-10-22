import { forwardRef } from 'react';
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
  padding: 60px 16px;
  background-color: ${props=> props.theme.colors.indigo6};
  border-radius: 5px 5px 0 0;
  z-index: 99;
  margin-bottom: 82px;
  
  ${breakpoint("md")`
    padding: 80px 24px;
    margin-bottom: 48px;
    bottom: 99999;
  `}
  ${breakpoint('xmd')`
    border-radius: 10px;
  `}
`;

const Footer = forwardRef(({children, ...props}, ref) => {
  return (
    <footer>
      <StyledFooter ref={ref} {...props}>
        {children}
      </StyledFooter>
    </footer> );
});

Footer.displayName = 'Footer';

export default Footer;