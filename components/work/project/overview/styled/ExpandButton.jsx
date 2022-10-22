import styled from 'styled-components';

export const StyledExpandButton = styled.button`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  background: rgba(21, 25, 45, 0.75);
  border: none;
  font-family: 'Comfortaa';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: ${props=> props.theme.colors.indigo12};
  text-align: center;
`;