import styled from 'styled-components';

const StyledProjectBullets = styled.ul`  
  list-style: outside;

  li {
    margin: 0 0 16px 0;
    font-family: 'Comfortaa';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${props=> props.theme.colors.indigo12};
    ::marker {
      font-size: 10px;
    }
    > span {
      position: relative;
      left: 4px;
    }
  }
`;

const ProjectBullets = ({bullets}) => {
  return (
      <StyledProjectBullets>
        {bullets.map(bullet => (<li key={bullet}><span>{bullet}</span></li>))}
      </StyledProjectBullets> 
  );
};
export default ProjectBullets;