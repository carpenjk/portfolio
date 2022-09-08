import styled from 'styled-components';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import Link from 'next/link';
import { breakpoint } from '@carpenjk/prop-x/css';

const StyledNavMenu = styled(NavigationMenu.Root)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 82px;
  padding: 16px;
  background-color: ${props=> props.theme.colors.indigo2};
  border-top: 1px solid ${props=> props.theme.colors.sand6};
  border-radius: 5px 5px 0px 0px;

  ${breakpoint('md')`
    position: relative;
    width: auto;
    height: 61px;
    padding: 0;
    border: none;
    background-color: unset;
  `}
`;


const StyledNavList = styled(NavigationMenu.List)`;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  height: 100%;
  ${breakpoint('md')`
  `}

`;

const StyledNavItem = styled(NavigationMenu.Item)`
  display: block;
  height: 100%;
`;

const StyledNavLink = styled.a`
  display: inline-block;
  font-family: 'Comfortaa';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  padding: 16px 8px;
  border-top: 3px solid transparent;
  &:hover {
    border-top: 3px solid ${props=> props.theme.colors.indigo11};
  }
  color: ${props=> props.theme.colors.indigo12};
  ${breakpoint('md')`
    font-size 20px;
    &:hover {
      border-top: none;
      border-bottom: 3px solid ${props=> props.theme.colors.indigo11};
    }
    }
  `}
  ${breakpoint('lg')`
    font-size 24px;
  `}

`;

const NavMenu = ({children}) => {
  return ( 
    <StyledNavMenu >
    <StyledNavList>
      <StyledNavItem>
        <Link href="#/">
          <StyledNavLink href="#/">Who</StyledNavLink>
        </Link>
      </StyledNavItem>
      <StyledNavItem>
        <Link href="#/">
          <StyledNavLink href="#/">Work</StyledNavLink>
        </Link>
      </StyledNavItem>
      <StyledNavItem>
        <Link href="#/">
          <StyledNavLink href="#/">Contact</StyledNavLink>
        </Link>
      </StyledNavItem>
      <StyledNavItem>
        <Link href="#/">
          <StyledNavLink href="#/">Resume</StyledNavLink>
        </Link>
      </StyledNavItem>
    </StyledNavList>
    <NavigationMenu.Viewport />
  </StyledNavMenu>
  );
};
export default NavMenu;