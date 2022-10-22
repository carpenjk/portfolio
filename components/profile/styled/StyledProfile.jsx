import styled from 'styled-components';
import { breakpoint } from '@carpenjk/prop-x/css';
import { Content } from '../../base/base';

export const StyledProfile = styled(Content)`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 45px;

  ${breakpoint('xmd')`
    justify-content: stretch;
  `}
`;