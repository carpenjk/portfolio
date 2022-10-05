import { useState, useEffect, useCallback } from "react";

const useScrollOffset = (target) => {
  const [offset, setOffset] = useState(0);

  const getOffset = useCallback(() => {
    const _target = target && target.current ? target.current : target;
    if(!_target || !_target.getBoundingClientRect){
      return undefined;
    }
    const rect = _target.getBoundingClientRect();
    return ({
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left
    });
  },[target]);

  useEffect(() => {
    function handleScroll() {
      setOffset(getOffset);
    }
    document.addEventListener('scroll', handleScroll);
    setOffset(getOffset);
    return () => document.removeEventListener('scroll', handleScroll);
  },[getOffset]);
  return (offset);
};
 
export default useScrollOffset;