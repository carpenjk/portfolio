import styled from 'styled-components';
import { breakpoint, condition } from '@carpenjk/prop-x/css';

export const StyledLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  height: 86px;

  > div {
    font-family: 'Comfortaa';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 13px;
    text-decoration-line: underline;
    text-align: center;
    color: ${props=> props.theme.colors.grass11};
    border-radius: 5px;
  }

  ${condition('disabled')`
    cursor: default;
    > div {
      text-decoration-line: none;
    }
  `}

  > div:last-child {
    margin-top: 12px;
  }

  ${breakpoint('md')`
    div {
      font-size: 14px;
    }
  `}

  ${breakpoint('xmd')`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 86px;
    > div:last-child {
      margin-top: 0;
      margin-left: 24px;
    }
  `}
`;