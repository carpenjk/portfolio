import { useInView } from "react-intersection-observer";
import { useSpring } from "react-spring";
import { fadeInAnimation } from "../inView/project/fadeInAnimation";

const useFadeInView = ({
  threshold = .9,
  rootMargin = "0px 0px 0px 0px",
  spring
}) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold,
    rootMargin,
  });

  const springObj = useMemo(() => ({...fadeInAnimation({trigger: inView}), ...spring}),[spring, inView]);
  const style = useSpring(springObj);

  return ( {
    viewRef: ref,
    inView,
    animation: style
  } );
};
 
export default useFadeInView;