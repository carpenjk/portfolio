import { StyledProjectBullets } from './styled/StyledBullets';

const ProjectBullets = ({bullets}) => {
  return (
      <StyledProjectBullets>
        {bullets.map(bullet => (<li key={bullet}><span>{bullet}</span></li>))}
      </StyledProjectBullets> 
  );
};
export default ProjectBullets;