import projects from '../../data/projects.json';
import { breakpoint } from '@carpenjk/prop-x/css';
import styled from 'styled-components';
import Project from './project/Project';

const StyledProjectList = styled.ul`
    margin-top: 70px;
    width: 100%;

    > li {
      margin-top: 90px;
      margin-bottom: 180px;
    }
    > li:last-child {
      margin-bottom: 0;
    }

    ${breakpoint('lg')`
      padding: 0 48px;

      > li {
        margin-top: 90px;
        margin-bottom: 225px;
      }
    `}
`;
const ProjectList = () => {
return ( 
    <StyledProjectList>
      {projects.map((project) => (<li key={project.name}><Project project={project} /></li>))}
    </StyledProjectList> 
    );
};
export default ProjectList;