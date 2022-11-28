import projects from '../../data/projects.json';
import { useState } from 'react';
import ProjectFilters from './projectFilters/ProjectFilters';
import ProjectList from './ProjectList';
import { StyledProjects } from './styled/StyledProjects';
import usePinToTop from '../hooks/usePinToTop';
import theme from '../../theme/theme';
import useBreakpoints from '@carpenjk/prop-x/useBreakpoints';

const getProjects = (filter) => {
  console.log("🚀 ~ file: Projects.jsx ~ line 11 ~ getProjects ~ filter", filter);
  const filtered = filter === 'all'
  ? projects
  : projects.filter((project) => project.type === filter);
  console.log("🚀 ~ file: Projects.jsx ~ line 13 ~ getProjects ~ filtered", filtered);
  return filtered;
};
      
const Projects = () => {
  const breakpoints = useBreakpoints(theme.breakpoints);
  const isMdBreakpoint = breakpoints.current.width >=  breakpoints.br.md;
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const {isPinned, triggerRef, targetRef} = usePinToTop({
    triggerOffsetTop: 8, targetOffsetTop: isMdBreakpoint ? 93 : 69});

  return ( 
        <StyledProjects ref={triggerRef}>
          <ProjectFilters 
            breakpoints={breakpoints}
            isPinned={isPinned}
            onFilter={(value)=> setFilteredProjects(getProjects(value))}
            filtersRef={targetRef}
          />
          <ProjectList breakpoints={breakpoints} projects={filteredProjects} />
        </StyledProjects>
  );
};
export default Projects;