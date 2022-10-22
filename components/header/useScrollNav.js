import { useInView } from 'react-intersection-observer';
import { useMemo } from 'react';

const useScrollNav = (items) => {
  const { ref: whoRef, inView: whoInView } = useInView({
    threshold: 0,
    rootMargin:  "-25% 0px -75% 0px"
  });

  const { ref: workRef, inView: workInView } = useInView({
    threshold: 0,
    rootMargin:  "-25% 0px -75% 0px"
  });
  

  const { ref: contactRef, inView: contactInView } = useInView({
    threshold: 1,
    rootMargin:  "0px 0px 0px 0px"
  });

  const navRefMap = useMemo(() => ({
    Who: {inView: whoInView, ref: whoRef},
    Work: {inView: workInView, ref: workRef},
    Contact: {inView: contactInView, ref: contactRef},
    Resume: false,
  }),[whoInView, workInView, contactInView, whoRef, workRef, contactRef]);

  const navItems = useMemo(() => 
    items.map((item) => ({...item, ...navRefMap[item.name]}))
   ,[navRefMap, items]);
  return (navItems);
};
 
export default useScrollNav;