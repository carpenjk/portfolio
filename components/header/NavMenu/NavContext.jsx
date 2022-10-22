import { createContext, useState } from "react";
import useScrollTo from '../../animation/hooks/useScrollTo';

const NavContext = createContext();

const NavContextProvider = ({items, scrollAnimation, children}) => {
  const [currentItemIndex, setCurrentItemIndex] = useState(-1);
  const [isNavigating, setIsNavigating] = useState(false);

  const scrollTo = useScrollTo({config: scrollAnimation, onRest: ()=> setIsNavigating(false)});

  const getIsActive = (itemIndex) => {
    if(isNavigating){
        return itemIndex === currentItemIndex;
    } 
    const isInView = items[itemIndex].inView;
    if(!isInView){
      return false;
    }
    //if more than one item is in view, the higher index is active;
    const inViewItems = items.filter((item) => item.inView);
    if(inViewItems.length === 1) {
      return isInView;
    }
    return items[itemIndex].name === inViewItems[inViewItems.length - 1].name;
  };

  const value = {
    navItems: items,
    currentIndex: currentItemIndex,
    setCurrentItemIndex,
    currentItem: items[currentItemIndex],
    isNavigating,
    setIsNavigating,
    getIsActive,
    scrollTo
  };

  return ( 
    <NavContext.Provider value={value}>{children}</NavContext.Provider>
   );
};
 
export {NavContext, NavContextProvider};