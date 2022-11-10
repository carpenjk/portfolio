import useBreakpoints from "@carpenjk/prop-x/useBreakpoints";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { useChain, useSpring, useSpringRef } from "@react-spring/web";
import theme from "../../../../theme/theme";
import { fadeInMotionAnimation } from "./fadeInMotionAnimation";
import { snapShotAnimation, snapshotSmallScreen } from "./snapShotAnimation";

const useProjectInViewAnimations = () => {
  const breakpoints = useBreakpoints(theme.breakpoints);
  const isXmdScreen = breakpoints.current.width >= breakpoints.br['xmd'];
  const { ref, inView, entry } = useInView({
      threshold: 0,
      rootMargin: isXmdScreen ? "25% 0px -75% 0px" : "35% 0px -65% 0px"
  });

  const snapshotRef = useSpringRef();
  const overviewRef = useSpringRef();
  const techRef = useSpringRef();
  const linkRef = useSpringRef();
  const snapshotConfig = useMemo(()=> isXmdScreen 
    ? {...snapShotAnimation(inView), ref: snapshotRef}
    : {...snapshotSmallScreen, ref: snapshotRef}
    , [isXmdScreen, inView, snapshotRef]);

  const overviewAnimation = useMemo(() => isXmdScreen
    ? {...fadeInMotionAnimation({trigger: inView, y: 0}), ref: overviewRef}
    : {...fadeInMotionAnimation({trigger: inView, y: 0}), ref: overviewRef}
    , [isXmdScreen, overviewRef, inView]);

  const techAnimation = useMemo(() => isXmdScreen
  ? {...fadeInMotionAnimation({trigger: inView, x: 12}), ref: techRef}
  : {...fadeInMotionAnimation({trigger: inView, x: 0}), ref: techRef}
  , [isXmdScreen, techRef, inView]);
  
  const linkAnimation = useMemo(() => isXmdScreen
  ? {...fadeInMotionAnimation({trigger: inView, x: 12,}), ref: linkRef}
  : {...fadeInMotionAnimation({trigger: inView, y: 0}), ref: linkRef}
  , [isXmdScreen, linkRef, inView]);
    

  const snapshotStyle = useSpring(snapshotConfig);
  const overviewStyle = useSpring(overviewAnimation);
  const techStyle = useSpring(techAnimation);
  const linkStyle = useSpring(linkAnimation);

  const timing = inView ? [0, .75, .75, .75 ] : [0, 0, 0, 0];
  useChain([snapshotRef, overviewRef, techRef, linkRef], timing);

  return ({
    inViewRef: ref,
    snapshotStyle,
    overviewStyle,
    techStyle,
    linkStyle
  });
};
 
export default useProjectInViewAnimations;