import { useEffect, useState } from "react";
import useScrollOffset from "./useOffsetTop";
import useScrollPosition from "./useScrollPosition";


const useInScrollRange = ({
  top,
  range,
  target,
}) => {
  const offset = useScrollOffset(target);
  const scrollPos = useScrollPosition();
  const [isInScrollRange, setIsInScrollRange] = useState(false);
  const {top: offsetTop} = offset || {};

  useEffect(() => {
    function isInRange(){
      if(offsetTop === undefined){
        return false;
      }
      if( top === undefined ){
        return true;
      }
      if(range === undefined){
        return offsetTop < top;
      }
      return offsetTop < top && offsetTop > range * -1;
    };

    if(!scrollPos || !offsetTop){
      return;
    }
    setIsInScrollRange(isInRange(top, range, offsetTop));
  }, [offsetTop, scrollPos, top, range]);
  return ( isInScrollRange );
  
};
 
export default useInScrollRange;