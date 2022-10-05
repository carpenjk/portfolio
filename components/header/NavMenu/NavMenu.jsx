import Image from 'next/image';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import { AnimatedDiv } from '../../animation/AnimatedDiv';
import { scrollAnimation } from '../../animation/scrollTo/scrollAnimation';
import useScrollTo from '../../animation/hooks/useScrollTo';
import useScrollHeight from '../../hooks/useScrollHeight';
import IndicatorArrow from './styled/IndicatorArrow';
import StyledNavMenu from './styled/NavMenu';
import  NavItem from './NavItem';
import  NavLink  from './styled/NavLink';
import  NavList from './styled/NavList';
import { useState } from 'react';

const NavMenu = ({animation: transition, items}) => {
  const [currItem, setCurrItem] = useState("");
  const scrollTo = useScrollTo(scrollAnimation);
  const scrollHeight = useScrollHeight();
  return ( 
    <StyledNavMenu >
      <NavList >
        {transition((style, name)=> {
          const itemProps = items.filter((item)=>item.name === name)[0];
          const handleClick = (e) => {
            e.preventDefault();
            if(itemProps.scrollValue){
              setCurrItem(name);
              //contact scrolls to bottom which can't be determined statically
              const scroll = name !== 'Contact' ? itemProps.scrollValue : scrollHeight-window.innerHeight;
              scrollTo(scroll, itemProps.scrollOffset);
            }
          };
          return (
            <AnimatedDiv style={style}>
              <NavItem name={name} isActive={currItem === name} onClick={() => setCurrItem(name)}>
                <Link  passHref href={itemProps.path}>
                  <NavLink onClick={handleClick}>
                    {name}
                  </NavLink>
                </Link>
                {name === 'Contact' && (
                  <IndicatorArrow><Image src="/footer/upArrow.svg" alt="arrow" width="47px" height="36px" /></IndicatorArrow>
                )}
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