import styled from "styled-components";
export const StyledProjects = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0 48px 0;
  background-color: ${props=> props.theme.colors.indigo3};
  overflow: hidden;
`;