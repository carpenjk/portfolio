import styled from "styled-components";
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
  font-family: 'Comfortaa';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 170%;
  color: ${props=> props.theme.colors.indigo12};
`;

export const A = styled.a`
  color: ${props=> props.theme.colors.orange11};
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

