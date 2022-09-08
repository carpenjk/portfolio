import styled from 'styled-components';
import { breakpoint } from '@carpenjk/prop-x/css';

const StyledlSplash = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;
const StyledSplashContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Comfortaa';
  text-align: center;
  
  h1 {
    font-family: inherit;
    font-size: 48px;
    
    color: ${props=> props.theme.colors.indigo12};

  }

  h2{
    font-family: inherit;
    font-size: 16px;
    color: ${props=> props.theme.colors.orange11};
  }


${breakpoint("md")`
  > h1 {
    font-size: 64px;
    margin-bottom: 16px;
  }
  > h2 {
    font-size: 20px;
  }
`}

`;
const Splash = (props) => {
return ( <StyledlSplash>
  <StyledSplashContent>
    <h1>I build things for the web</h1>
    <h2>Web apps and javascript libraries for making reusable components</h2>
  </StyledSplashContent>
</StyledlSplash> );
};
export default Splash;