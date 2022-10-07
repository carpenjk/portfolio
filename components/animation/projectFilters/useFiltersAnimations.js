import { useSpring } from "react-spring";
import { snapTopBorder } from "./snapTopBorder";
import { snapTopText } from "./snapTopText";
const useFiltersAnimations = ({trigger, fontSize}) => {
  const borderAnimation = useSpring(snapTopBorder(trigger));
  const textAnimation = useSpring(snapTopText({trigger,fontSize}));
  return ( {
    border: borderAnimation,
    text: textAnimation
  } );
};

export default useFiltersAnimations;