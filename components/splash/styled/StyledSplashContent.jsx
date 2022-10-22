import styled from "styled-components";
import { breakpoint } from "@carpenjk/prop-x/css";

export const StyledSplashContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Comfortaa';
  text-align: center;
  
  h1 {
    font-family: inherit;
    font-size: 48px;
    color: ${props=> props.theme.colors.indigo12};
    margin-bottom: 24px;
  }

  h2{
    font-family: inherit;
    font-size: 16px;
    color: ${props=> props.theme.colors.orange11};
  }


${breakpoint("md")`
   h1 {
    font-size: 64px;
  }
   h2 {
    font-size: 20px;
  }
`}
`;