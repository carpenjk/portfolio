import styled from "styled-components";
import { breakpoint } from '@carpenjk/prop-x/css';
const StyledName = styled.h1`
  font-family: 'Comfortaa';
  font-weight: 400;
  font-size: 20px;
  letter-spacing: normal;
  line-height: normal;
  color: ${props=> props.theme.colors.indigo11};
  ${breakpoint("xmd")`
  font-size: 34px;

`}

`;

const Name = () => {
  return ( <StyledName>Jeremy Carpenter</StyledName> );
};
 
export default Name;