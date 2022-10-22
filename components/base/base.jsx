import styled from "styled-components";
import { breakpoint } from "@carpenjk/prop-x/css";
export const H1 = styled.h1`
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  letter-spacing: 0.05em;
  /* indigo/dark/12 */
  color: ${props=> props.theme.colors.indigo12};
  margin: 0;
`;

export const P1 = styled.p`
  margin: 16px 0;
  font-family: 'Comfortaa';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 170%;
  color: ${props=> props.theme.colors.indigo12};
`;

export const P2 = styled(P1)`
  margin: 14px 0;
  font-size: 14px;
  color: ${props=> props.theme.colors.indigo11};
`;

export const A = styled.a`
  color: ${props=> props.theme.colors.orange11};
`;

export const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 135px;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  ${breakpoint("md")`
    max-width: 1100px;
  `}
`;