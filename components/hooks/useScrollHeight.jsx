import { useEffect, useState } from "react";

const useScrollHeight = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  useEffect(() => {
    function handleResize() {
      setScrollHeight(document.body.scrollHeight);
    }
    document.addEventListener('resize', handleResize);
    setScrollHeight(document.body.scrollHeight);
    return () => document.removeEventListener('resize', handleResize);
  },[]);
  return ( scrollHeight );
};
 
export default useScrollHeight;