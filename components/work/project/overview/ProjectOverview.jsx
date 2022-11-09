import Headline from './Headline';
import ProjectBullets from './ProjectBullets';
import ProjectText from './ProjectText';
import { StyledProjectOverview } from './styled/StyledProjectOverview';

const ProjectOverview = ({overview: {headline, text, bullets}, style}) => {
return (
    <StyledProjectOverview style={style}>
      <Headline>{headline}</Headline>
      <ProjectText text={text}></ProjectText>
      <ProjectBullets bullets={bullets}/>
    </StyledProjectOverview> 
   );
};
export default ProjectOverview;