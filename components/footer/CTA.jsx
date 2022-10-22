import { breakpoint } from '@carpenjk/prop-x/css';
import styled from 'styled-components';

const StyledCTA = styled.div`
    position: relative;
    padding: 16px;
    margin: 0 0 32px 0;
    font-family: 'Comfortaa';
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    font-size: 18px;
    color: ${props=> props.theme.colors.indigo12};
    ${breakpoint('sm')`
      font-size: 20px;
    `}
    ${breakpoint('md')`
      margin: 0 0 0 16px;
    `}
    ${breakpoint('xmd')`
      font-size: 22px;
    `}
`;
const CTA = () => {
return (
  <StyledCTA>
    Let&apos;s work together! I would love to hear from you on any of these social platforms.
  </StyledCTA>
);
};
export default CTA;