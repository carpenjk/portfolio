import { useSpring, useSpringRef,useChain, useTransition } from "react-spring";
import { slideFromRight } from "./slideFromRight";
import { splashAnimation } from "./splashAnimation";

const useOnLoadAnimation = ({navItems}) => {
  const navAnimationRef = useSpringRef();
  const splashAnimation1Ref = useSpringRef();
  const splashAnimation2Ref = useSpringRef();

  // useTransition used because of react-spring bug when combining useTrail and useChain
  const navAnimationTransition = useTransition( navItems, {
    ...slideFromRight,
    ref: navAnimationRef
  });

  const splashAnimation1 = useSpring({
    ...splashAnimation,
    ref: splashAnimation1Ref
  });
  const splashAnimation2 = useSpring({
    ...splashAnimation,
    ref: splashAnimation2Ref
  });

  useChain([splashAnimation1Ref, splashAnimation2Ref, navAnimationRef], [0.8, 2.25, 4]);

  return ( {
    splash: [splashAnimation1, splashAnimation2],
    nav: navAnimationTransition
  } );
};
 
export default useOnLoadAnimation;