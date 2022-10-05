import { breakpoint } from '@carpenjk/prop-x/css';
import styled from 'styled-components';
import { Content } from '../base/base';
import { SectionHeader } from '../base/SectionHeader';
import Projects from './Projects';

const StyledWork = styled(Content)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 45px;
  margin-bottom: 40px;
  ${breakpoint('md')`
    margin-bottom: 90px;
  `}
`;
const Work = () => {
return ( 
    <StyledWork>
      <SectionHeader>Work</SectionHeader>
      <Projects />
    </StyledWork> );
};
export default Work;