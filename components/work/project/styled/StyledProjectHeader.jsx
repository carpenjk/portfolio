import { breakpoint } from '@carpenjk/prop-x/css';
import styled from 'styled-components';

export const StyledProjectHeader = styled.h2`
  font-family: 'Comfortaa';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: normal;
  text-align: center;
  color: ${props=> props.theme.colors.grass11};
  padding: 0 8px;

  ${breakpoint('xmd')`
    font-size: 48px;
    margin-bottom: 48px;
  `}
`;
