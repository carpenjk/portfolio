import styled from 'styled-components';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import Link from 'next/link';


const StyledNavList = styled(NavigationMenu.List)`;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const StyledNavLink = styled.a`
  padding: 16px 8px;
  font-family: 'Comfortaa';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: ${props=> props.theme.colors.indigo12};

  &:hover {
    border-bottom: 3px solid ${props=> props.theme.colors.indigo11};
  }
`;

const FooterNav = ({children}) => {
  return ( 
    <NavigationMenu.Root >
    <StyledNavList>
      <NavigationMenu.Item>
        <Link href="#/">
          <StyledNavLink href="#/">Who</StyledNavLink>
        </Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <Link href="#/">
          <StyledNavLink href="#/">Work</StyledNavLink>
        </Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <Link href="#/">
          <StyledNavLink href="#/">Contact</StyledNavLink>
        </Link>
      </NavigationMenu.Item>
      <NavigationMenu.Item>
        <Link href="#/">
          <StyledNavLink href="#/">Resume</StyledNavLink>
        </Link>
      </NavigationMenu.Item>
      <NavigationMenu.Indicator />
    </StyledNavList>
    <NavigationMenu.Viewport />
  </NavigationMenu.Root>
  );
};
export default FooterNav;