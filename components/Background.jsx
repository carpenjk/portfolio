import styled from "styled-components";
const StyledBackground = styled.div`;
  background-color: ${props=> props.theme.colors.indigo1};
  min-width: 100%;
  min-Height: 100vh;
`;

const Background = ({children}) => {
  return (  <StyledBackground>{children}</StyledBackground>);
};
 
export default Background;