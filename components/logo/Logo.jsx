import styled from 'styled-components';
import { breakpoint } from '@carpenjk/prop-x/css';
import Credentials from './Credentials';
import Image from 'next/image';

const StyledLogo = styled.div`
  position: relative;
  top: 0;
  left: 0;
  flex: 0 1 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledImgWrapper = styled.div`
  flex: none;
  width: 49px;
  height: 37.5px;
  ${breakpoint('md')`
    width: 69px;
    height: 53px;
  `}
`;

const Logo = (props) => {
  return ( 
    <StyledLogo>
      <StyledImgWrapper>
        <Image alt="hammer" src="/logo/hammer.svg" width={69} height={53}/>
      </StyledImgWrapper>
    <Credentials/>
    </StyledLogo> 
  );
};
export default Logo;