import styled from 'styled-components';
import { breakpoint } from '@carpenjk/prop-x/css';
import { useChain, useSpring, useSpringRef, useTrail } from 'react-spring';
import { AnimatedSpan } from './animation/AnimatedSpan';

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
   h1 {
    font-size: 64px;
    margin-bottom: 16px;
  }
   h2 {
    font-size: 20px;
  }
`}
`;


const Splash = ({animation}) => {
  const [h1Animate, h2Animate] = animation;
  // const config = {
  //   mass: 1,
  //   tension: 75,
  //   friction: 50,
  // };

  // const h1SpringRef = useSpringRef();
  // const h2SpringRef = useSpringRef();

  // const h1Animate = useSpring({
  //   opacity: 1,
  //   from: {
  //     opacity: 0
  //   },
  //   ref: h1SpringRef,
  //   config
  // });
  // const h2Animate = useSpring({
  //   opacity: 1,
  //   from: {
  //     opacity: 0
  //   },
  //   ref: h2SpringRef,
  //   config
  // });

  // useChain([h1SpringRef,h2SpringRef], [0, .5]);

  return ( <StyledlSplash>
    <StyledSplashContent>
      <AnimatedSpan  style={h1Animate}><h1>I build things for the web</h1></AnimatedSpan>
      <AnimatedSpan style={h2Animate}><h2>Web apps and javascript libraries for making reusable components</h2></AnimatedSpan>
    </StyledSplashContent>
  </StyledlSplash> );
};
export default Splash;