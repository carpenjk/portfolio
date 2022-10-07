import { useState, useEffect } from 'react';
import theme from '../../../theme/theme';
import { AnimatedSpan } from '../../animation/AnimatedSpan';
import useBounce from '../../animation/hooks/useBounce';
import useSpringToggle from '../../animation/hooks/useSpringToggle';
import { linkHoverAnimation } from '../../animation/other/linkHoverAnimation';
import AnimatedIndicator from './AnimatedIndicator';
import StyledNavItem from './styled/NavItem';

const INDICATOR_WIDTH = '60px';

const NavItem = ({children, name, isActive, ...props}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOn, setIsOn] = useState(isActive);

  const [itemBounce, itemBounceTrigger] = useBounce({
    y: -5
  });

  const [hoverAnimationStyle, hoverToggle] = useSpringToggle(linkHoverAnimation({
    width:INDICATOR_WIDTH,
    color: theme.colors.indigo11
  }));

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
    hoverToggle(isOn);
  },[isOn, hoverToggle]);

  
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