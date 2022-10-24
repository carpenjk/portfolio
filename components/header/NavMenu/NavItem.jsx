import { useState, useEffect, useRef } from 'react';
import theme from '../../../theme/theme';
import { AnimatedSpan } from '../../animation/AnimatedSpan';
import useBounce from '../../animation/hooks/useBounce';
import useSpringToggle from '../../animation/hooks/useSpringToggle';
import { navHoverAnimation } from '../../animation/other/navHoverAnimation';
import AnimatedIndicator from './AnimatedIndicator';
import StyledNavItem from './styled/NavItem';

const INDICATOR_WIDTH = '60px';

const NavItem = ({children, name, itemRef, isActive, isNavigating, ...props}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [itemBounce, itemBounceTrigger] = useBounce({
    y: -5
  });

  const [indicatorAnimationStyle, indicatorToggle] = useSpringToggle(navHoverAnimation({
    width:INDICATOR_WIDTH,
    color: theme.colors.indigo11
  }));

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    indicatorToggle(isHovered);
    if(isHovered){
      itemBounceTrigger();
    }
  }, [isHovered, indicatorToggle, itemBounceTrigger]);

  useEffect(() => {
    if(!isActive){
      if(!isHovered){
        indicatorToggle(false);
      }
      return;
    }
    indicatorToggle(true);
  },[isActive, isHovered, indicatorToggle]);
  
  return ( 
      <StyledNavItem 
        {...props}
        ref={itemRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <AnimatedSpan style={itemBounce}>
          {children}
        </AnimatedSpan>
        <AnimatedIndicator
          style={indicatorAnimationStyle}
          indicatorWidth={INDICATOR_WIDTH}
          indicatorTop={['auto', '0']}
          indicatorBottom={['0', 'auto'] }
        />
      </StyledNavItem>
     );
};
 
export default NavItem;