import styled from 'styled-components';
import { breakpoint } from '@carpenjk/prop-x/css';

const StyledTitle = styled.div`
  font-family: 'Comfortaa';
  font-style: normal;
  color: ${props=> props.theme.colors.orange11};
  ${breakpoint("md")`
    font-size: 16px;
  `}
  
`;
const Title = () => { 
  return ( <StyledTitle>Web Developer</StyledTitle> );
};
export default Title;