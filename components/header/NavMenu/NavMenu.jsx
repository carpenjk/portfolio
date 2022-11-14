import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import { getIndexedPropValue } from '@carpenjk/prop-x';
import useBreakpoints from '@carpenjk/prop-x/useBreakpoints';
import { AnimatedDiv } from '../../animation/AnimatedDiv';
import StyledNavMenu from './styled/NavMenu';
import  NavItem from './NavItem';
import  NavLink  from './styled/NavLink';
import  NavList from './styled/NavList';
import { useContext } from 'react';
import theme from '../../../theme/theme';
import {NavContext} from './NavContext';

const NavMenu = () => {
  const breakpoint = useBreakpoints(theme.breakpoints);
  const {navItems, setCurrentItemIndex, isNavigating, setIsNavigating, getIsActive, scrollTo} = useContext(NavContext);
  
  return ( 
    <StyledNavMenu >
      <NavList >
        {navItems.map((item, index)=> {
          const linkProps = item.props || {};
          const handleClick = (e) => {
            e.preventDefault();
            setCurrentItemIndex(index);
            if(item.scroll !== false){
              //prevent item animations while scrolling by
              setIsNavigating(true);
              scrollTo(item.path, getIndexedPropValue(item.scrollOffset, breakpoint.indexOfLower));
            }
          };
          return (
            <AnimatedDiv key={item.name} >
              <NavItem item={item.name} name={item.name} isNavigating={isNavigating} isActive={getIsActive(index)} >
                <Link passHref href={item.path}>
                  <NavLink
                   {...linkProps} 
                   onClick={item.scrollOffset === undefined ? undefined : handleClick}
                  >
                    {item.name}
                  </NavLink>
                </Link>
              </NavItem>
            </AnimatedDiv>
          );
        })}
      </NavList>
    <NavigationMenu.Viewport />
  </StyledNavMenu>
  );
};
export default NavMenu;