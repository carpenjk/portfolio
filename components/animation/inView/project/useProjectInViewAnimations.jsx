import useBreakpoints from "@carpenjk/prop-x/useBreakpoints";
import { useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { useChain, useSpring, useSpringRef } from "react-spring";
import theme from "../../../../theme/theme";
import { fadeInMotionAnimation } from "./fadeInMotionAnimation";
import { snapShotAnimation, snapshotSmallScreen } from "./snapShotAnimation";

const thresholds = {
  xmd: 0,
  shortHeight: .45,
  remaining: .48
};
const rootMargins = {
  xmd: "25% 0px -75% 0px",
  shortHeight: "50% 0px -10% 0px",
  remaining: "50% 0px -5% 0px"
};

const useProjectInViewAnimations = () => {
  const breakpoints = useBreakpoints(theme.breakpoints);
  const isLgScreen = breakpoints.current.width >= breakpoints.br['xmd'];

  function getThreshold(){
    if(isLgScreen){
      return thresholds.xmd;
    }
    return breakpoints.current.height < 800
      ? thresholds.shortHeight
      : thresholds.remaining;
  }

  function getRootMargins(){
    if(isLgScreen){
      return rootMargins.xmd;
    }
    return breakpoints.current.height < 800
      ? rootMargins.shortHeight
      : rootMargins.remaining;
  }

  const { ref, inView, entry } = useInView({
      threshold: getThreshold(),
      rootMargin: getRootMargins()
      // threshold: .9,
      // rootMargin: "500px 0px 0px 0px"
  });

  const snapshotRef = useSpringRef();
  const overviewRef = useSpringRef();
  const techRef = useSpringRef();
  const linkRef = useSpringRef();
  const snapshotConfig = useMemo(()=> isLgScreen 
    ? {...snapShotAnimation(inView), ref: snapshotRef}
    : {...snapshotSmallScreen, ref: snapshotRef}
    , [isLgScreen, inView, snapshotRef]);

  const overviewAnimation = useMemo(() => isLgScreen
    ? {...fadeInMotionAnimation({trigger: inView, y: 0}), ref: overviewRef}
    : {...fadeInMotionAnimation({trigger: inView, y: 0}), ref: overviewRef}
    , [isLgScreen, overviewRef, inView]);

  const techAnimation = useMemo(() => isLgScreen
  ? {...fadeInMotionAnimation({trigger: inView, x: 12}), ref: techRef}
  : {...fadeInMotionAnimation({trigger: inView, x: 0}), ref: techRef}
  , [isLgScreen, techRef, inView]);
  
  const linkAnimation = useMemo(() => isLgScreen
  ? {...fadeInMotionAnimation({trigger: inView, x: 12,}), ref: linkRef}
  : {...fadeInMotionAnimation({trigger: inView, y: 0}), ref: linkRef}
  , [isLgScreen, linkRef, inView]);
    

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