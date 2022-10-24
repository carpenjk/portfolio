import ProjectLink from './ProjectLink';
import { StyledProjectLinks } from './styled/StyledProjectLinks';
import { StyledProjectLinkList } from './styled/StyledProjectLinkList';




const ProjectLinks = ({breakpoints, links, style}) => {
return (
  <StyledProjectLinks style={style}>
    <StyledProjectLinkList>
      {links.map((link) => <li key={link.path}><ProjectLink breakpoints={breakpoints} link={link}/></li>)}
    </StyledProjectLinkList>
  </StyledProjectLinks> 
  );
};
export default ProjectLinks;