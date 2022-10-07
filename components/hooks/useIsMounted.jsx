import { useState, useEffect } from "react";
const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState();
  useEffect(() => setIsMounted(true),[]);
  return ( isMounted );
};
 
export default useIsMounted;