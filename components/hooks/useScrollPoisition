import { useState, useEffect } from "react";

const useScrollPosition = () => {
  const [scrollPos, setScrollPos] = useState(0);
  useEffect(() => {
    function handleScroll() {
      setScrollPos(document.documentElement.scrollTop);
    }
    document.addEventListener('scroll', handleScroll);
    setScrollPos(document.documentElement.scrollTop);
    return () => document.removeEventListener('scroll', handleScroll);
  },[]);
  return (scrollPos);
};
 
export default useScrollPosition;