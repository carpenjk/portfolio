import { StyledProjectTech } from './styled/StyledProjectTech';
import { StyledTechItem } from './styled/StyledTechItem';
import { StyledTechList } from './styled/StyledTechList';

const ProjectTech = ({tech, style}) => {
return ( 
    <StyledProjectTech style={style}>
      <StyledTechList>
        {tech.map((item) => (<StyledTechItem key={item}>{item}</StyledTechItem>))}
      </StyledTechList>
    </StyledProjectTech> 
    );
};
export default ProjectTech;