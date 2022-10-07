import { useEffect, useState, useMemo } from 'react';
import { useCallback } from 'react';
import { useSpring } from 'react-spring';

const useSpringToggle = ({
  config = {
    mass: 10,
    tension: 300,
    friction: 20,
  },
  from,
  to,
  loop,
  delay,
  events
}) => {
  const [isOn, setIsOn] = useState(false);
  const [styles, api] = useSpring(()=> ({
    display: 'inline-block',
    backfaceVisibility: 'hidden',
    config,
    from
  }));

  const toggle = useCallback( (bln) =>{
    setIsOn(bln);
  },[]);

  useEffect(() => {
    if(isOn) {
      api.start({to, from, loop, delay, events});
      return;  
    }
     api.start({to, from, reverse: true, loop, delay, events});
  }, [isOn, api, from, to, loop, delay, events]);

  return ( [styles, toggle]);
};
 
export default useSpringToggle;