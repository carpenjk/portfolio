import styled from 'styled-components';
import * as Tabs from '@radix-ui/react-tabs';
import { breakpoint } from '@carpenjk/prop-x/css';

export const  ProjectFilter = styled(Tabs.Trigger)`
  padding: 12px;
  border-radius: 5px;
  background: none;
  border: none;
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 400;
  font-size: inherit;
  color: ${props=> props.theme.colors.indigo12};
  cursor: pointer;

  ${breakpoint('md')`
    padding: 18px 24px;
  `}
`;
