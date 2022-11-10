import { useEffect, useState, useMemo } from 'react';
import { useRef } from 'react';
import { useCallback } from 'react';
import { useSpring } from '@react-spring/web';

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
  events,
}) => {
  const [isOn, setIsOn] = useState(false);
  const prevOn = useRef();
  prevOn.current = isOn;

  const [styles, api] = useSpring(()=> ({
    display: 'inline-block',
    backfaceVisibility: 'hidden',
    config,
    // from,
    loop,
    delay,
    events
  }));

  const toggle = useCallback( (bln) =>{
    setIsOn(bln);
  },[]);

  useEffect(() => {
    if(isOn) {
      api.start({...to});
      return;  
    }
    if(!isOn){
        api.start({...from});
      }
  }, [isOn, api, from, to, loop, delay, events, prevOn]);

  return ( [styles, toggle]);
};
 
export default useSpringToggle;