import styled from "styled-components";

export const StyledHeadline = styled.h2`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Comfortaa';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  color: ${props=> props.theme.colors.indigo12};
`;