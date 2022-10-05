import styled from "styled-components";
import { breakpoint } from "@carpenjk/prop-x/css";

export const SocialText = styled.div`
  font-family: 'Comfortaa';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: ${props=> props.theme.colors.grass12};
  ${breakpoint('sm')`
    font-size: 16px;
  `}
`;