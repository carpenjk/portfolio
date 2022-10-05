import { useState, useEffect } from 'react';
import theme from '../../../theme/theme';
import { AnimatedSpan } from '../../animation/AnimatedSpan';
import useBounce from '../../animation/hooks/useBounce';
import useSpringToggle from '../../animation/hooks/useSpringToggle';
import AnimatedIndicator from './AnimatedIndicator';
import StyledNavItem from './styled/NavItem';

const INDICATOR_WIDTH = '60px';
const hoverAnimation = {
  to: {
    width: INDICATOR_WIDTH,
    backgroundColor: theme.colors.indigo11,
  },
  from: {
    width: '0px',
    backgroundColor: 'transparent'
  },
  config: {
    mass: 10,
    tension: 300,
    friction: 20,
    clamp: true
  },
};
const NavItem = ({children, name, isActive, ...props}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOn, setIsOn] = useState(isActive);

  const [itemBounce, itemBounceTrigger] = useBounce({
    y: -5
  });

  const [hoverAnimationStyle, toggleControl] = useSpringToggle(hoverAnimation);

  const handleMouseEnter = () => {
    setIsHovered(true);
    itemBounceTrigger();
    setIsOn(true);
    
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    if(!isActive){
      setIsOn(false);
    }
  };

  useEffect(() => {
      if(!isHovered) {
        setIsOn(isActive);
      }
  }, [isActive, isHovered]);

  useEffect(() => {
    toggleControl.toggle(isOn);
  },[isOn, toggleControl]);

  
  return ( 
      <StyledNavItem 
        {...props}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <AnimatedSpan style={itemBounce}>
          {children}
        </AnimatedSpan>
        <AnimatedIndicator
          style={hoverAnimationStyle}
          indicatorWidth={INDICATOR_WIDTH}
          indicatorTop={['auto', '0']}
          indicatorBottom={['0', 'auto'] }
        />
      </StyledNavItem>
     );
};
 
export default NavItem;