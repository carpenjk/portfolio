import { breakpoint } from '@carpenjk/prop-x/css';
import styled from 'styled-components';
import { AnimatedDiv } from '../../animation/AnimatedDiv';
import ProjectLink from './ProjectLink';

const StyledProjectLinks = styled(AnimatedDiv)`
  position: relative;
  width: 100%;

  ${breakpoint('lg')`
    grid-row: 2/3;
    grid-column: 1/2;
    grid-template-columns: 1fr;
    align-self: end;
  `}
`;

const StyledProjectLinkList = styled.ul`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 14px;
  max-width: 500px;

  ${breakpoint('lg')`
    grid-template-columns: 1fr;
`}
`;
const ProjectLinks = ({links, style}) => {
return (
  <StyledProjectLinks style={style}>
    <StyledProjectLinkList>
    {links.map((link) => <li key={link.path}><ProjectLink link={link}/></li>)}
    </StyledProjectLinkList>
  </StyledProjectLinks> 
  );
};
export default ProjectLinks;