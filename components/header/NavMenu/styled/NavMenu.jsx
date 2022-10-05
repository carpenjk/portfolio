import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import styled from 'styled-components';
import { breakpoint } from '@carpenjk/prop-x/css';

export default styled(NavigationMenu.Root)`
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