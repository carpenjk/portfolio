import { useCallback, useEffect, useState } from 'react';
import { useSpring } from 'react-spring';

const useBounce = ({
  type = "toggle",
  x = 0,
  y = 0,
  z = 0,
  perspective = 400,
  rotation = 0,
  scale = 1,
  timing = 150,
  springConfig = {
    tension: 300,
    friction: 10,
  },
  ...props
}) => {
  const [isBounced, setIsbounced] = useState(false);

  // const getProps = () => {
    
  //   return isBounced ? props : {};
  // };

  const style = useSpring({
    display: 'inline-block',
    backfaceVisibility: 'hidden',
    transform: isBounced
      ? `perspective(${perspective}px)
         translate3d(${x}px, ${y}px, ${z}px)
         rotate(${rotation}deg)
         scale(${scale})` 
      : `perspective(${perspective}px)
         translate3d(0px, 0px, 0px)
         rotate(0deg)
         scale(1)`,
    // ...getProps(),
    config: springConfig,
  });

  useEffect(() => {
    // We only want to act when we're going from
  // not-bounced to bounced.
    if (!isBounced) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
        setIsbounced(false);
      }, timing);  
    
    // Just in case our component happens to
    // unmount while we're bounced, cancel
    // the timeout to avoid a memory leak.
    return () => {
      if(timeoutId) window.clearTimeout(timeoutId);
    };
    // Trigger this effect whenever `isbounced`
    // changes. We also listen for `timing` changes,
    // in case the length of the bounce delay is
    // variable.
  }, [isBounced, timing, type]);

  const trigger = useCallback(() => {
    setIsbounced(true);
  }, []);

  return ( [style, trigger]);
};
 
export default useBounce;