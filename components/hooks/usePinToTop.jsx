import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const usePinToTop = ({triggerOffsetTop, targetOffsetTop}) => {
  const [isPinned, setIsPinned] = useState(false);

  const rootMargin = `${triggerOffsetTop}% 0px ${-100 + triggerOffsetTop}% 0px`;
  const  {ref: triggerRef, inView: triggerInView, triggerEntry} = useInView({
    threshold: 0,
    rootMargin: rootMargin,
  });

  const  {ref: targetRef, inView: targetInView} = useInView({
    threshold: 1,
    rootMargin: `0px 0px 0px 0px`,

  });
  
  useEffect(() => {
    if(!triggerInView){
      setIsPinned(false);
      return;
    }
    setIsPinned(!targetInView);
  }, [triggerInView, triggerEntry, targetInView]);
  return ( {isPinned, triggerRef, targetRef} );
  
};
 
export default usePinToTop;
