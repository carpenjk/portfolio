import styled from 'styled-components';
import { AnimatedSpan } from '../animation/AnimatedSpan';
import SpashSocials from './SplashSocials';
import { StyledSplash } from './styled/StyledSplash';
import { StyledSplashContent } from './styled/StyledSplashContent';


const StyledSplashImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  bottom:0;
  width: 100%;
  height: 100%;
  opacity: 15%;
  object-fit: cover;
  
`;

const Splash = ({animation}) => {
  const [h1Animate, h2Animate] = animation;

  return ( 
  <StyledSplash>
    <StyledSplashImg  src="/hero/hero.png"/>
    <StyledSplashContent>
      <AnimatedSpan  style={h1Animate}><h1>I build things for the web</h1></AnimatedSpan>
      <AnimatedSpan style={h2Animate}><h2>Web apps and JavaScript libraries for making reusable components</h2></AnimatedSpan>
    </StyledSplashContent>
    <SpashSocials />
  </StyledSplash> );
};
export default Splash;