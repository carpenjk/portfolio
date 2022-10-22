import { SectionHeader } from '../base/SectionHeader';
import Projects from './Projects';
import { StyledWork } from './styled/StyledWork';

const Work = () => {
return ( 
    <StyledWork>
      <SectionHeader>Work</SectionHeader>
      <Projects />
    </StyledWork> );
};
export default Work;