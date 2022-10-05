import { breakpoint } from '@carpenjk/prop-x/css';
import styled from 'styled-components';

const StyledCopyright = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-family: 'comfortaa';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: ${props=> props.theme.colors.indigo11};

  position: absolute;
  bottom: 32px;
  right: 1.75em;
  transform-origin: bottom right;
  transform: rotate(90deg);

  ${breakpoint('md')`
    position: relative;
    bottom: 0;
    right: 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 32px;
    font-size: 14px;
    transform: unset;
  `}
`;
const Copyright = () => {
return ( <StyledCopyright>Designed and built by me © Jeremy Carpenter</StyledCopyright> );
};
export default Copyright;