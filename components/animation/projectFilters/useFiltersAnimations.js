import { useSpring } from "react-spring";
import { snapTopBorder } from "./snapTopBorder";
import { snapTopText } from "./snapTopText";
const useFiltersAnimations = ({isPinned, fontSize, top}) => {
  const borderAnimation = useSpring(snapTopBorder(isPinned));
  const textAnimation = useSpring(snapTopText({trigger: isPinned,fontSize}));

  const pinAnimation = useSpring({
    top: isPinned ? top : '0px',
    // delay: 20,
    config: {
      mass: 1,
      tension: 120,
      friction: 20,
    }
  });
  
  return ({
    borderAnimation: borderAnimation,
    textAnimation: textAnimation,
    pinAnimation
  });
};

export default useFiltersAnimations;