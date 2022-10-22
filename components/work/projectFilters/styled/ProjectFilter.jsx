import styled from 'styled-components';
import * as Tabs from '@radix-ui/react-tabs';
import { breakpoint, condition } from '@carpenjk/prop-x/css';

export const  ProjectFilter = styled(Tabs.Trigger)`
  padding: 12px;
  background: none;
  border: none;
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 400;
  font-size: inherit;
  color: ${props=> props.theme.colors.indigo12};
  cursor: pointer;
  border-radius: 1px;

  :hover {
    background: ${props=> props.theme.colors.orange5};
    transition: background ease-in-out 300ms;
  }

  ${condition('$isSelected')`
    background: ${props => props.theme.colors.orange5};
  `}

  ${breakpoint('md')`
    padding: 18px 24px;
  `}
`;
