import styled from "styled-components";
export const StyledMoreButton = styled.button`
  display: block;
  font-family: 'Comfortaa';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;  
  color: ${props=> props.theme.colors.indigo11};
  padding: 12px;
  border: 1px solid ${props=> props.theme.colors.indigo7};
  border-radius: 5px;
  background: ${props=> props.theme.colors.indigo3};

  :hover {
    color: ${props=> props.theme.colors.indigo12};
    background: ${props=> props.theme.colors.indigo7};
    border: 1px solid ${props=> props.theme.colors.indigo8};
    transition: color ease-in-out 300ms, background ease-in-out 300ms, border ease-in-out 300ms;
  }
  :disabled {
    background: ${props=> props.theme.colors.indigo3};
    color: ${props=> props.theme.colors.indigo9};
    border: 1px solid ${props=> props.theme.colors.indigo6};
  }
`;