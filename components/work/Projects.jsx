import styled from 'styled-components';
import { useRef} from 'react';
import useInScrollRange from '../hooks/useInScrollRange';
import ProjectFilters from './projectFilters/ProjectFilters';
import ProjectList from './ProjectList';
import useBreakpoints from '@carpenjk/prop-x/useBreakpoints';
import theme from '../../theme/theme';

const StyledProjects = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0 90px 0;
  background-color: ${props=> props.theme.colors.indigo3};
`;

const Projects = () => {
  const br = useBreakpoints(theme);
  const projectsRef = useRef();
  const isFiltersPinned = useInScrollRange({target: projectsRef, top: br.current.width >= br.br.md ? 121 : 83 });
  return ( 
        <StyledProjects ref={projectsRef}>
          <ProjectFilters 
            isPinned={isFiltersPinned}
            // animation={filterAnimations}  
          />
          <ProjectList />
        </StyledProjects>
  );
};
export default Projects;