import { breakpoint } from '@carpenjk/prop-x/css';
import styled from 'styled-components';
import { AnimatedDiv } from '../../animation/AnimatedDiv';

const StyledProjectTech = styled(AnimatedDiv)`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

  ${breakpoint('lg')`
    grid-row: 1/2;
    grid-column: 2/3;
    justify-self: end;
    align-self: start;
    justify-content: flex-end;
    align-items: center;

  `}
`;

const StyledTechList = styled.ul`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 32px 8px;
  margin-left: -18px;
  margin-bottom: -18px;

  ${breakpoint('lg')`
    height: 75px;
    width: 120.7%;
    max-width: calc(200% - 319px);
    font-size: 16px;
    padding: 28.5px 16px;
    margin: 0;
    justify-content: flex-end;
    align-items: center;
  `}
`;

const StyledTechItem = styled.li`
  font-family: 'Comfortaa';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  color: ${props=> props.theme.colors.orange10};
  margin-left: 18px;
  margin-bottom: 18px;

  ${breakpoint('sm')`
    font-size: 14px;
  `}

  ${breakpoint('lg')`
    font-size: 16px;  
  `}
`;



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