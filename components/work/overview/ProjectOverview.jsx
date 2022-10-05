import { breakpoint } from '@carpenjk/prop-x/css';
import styled from 'styled-components';
import { AnimatedDiv } from '../../animation/AnimatedDiv';
import Headline from './Headline';
import ProjectBullets from './ProjectBullets';
import ProjectText from './ProjectText';

const StyledProjectOverview = styled(AnimatedDiv)`
  postion: relative;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 40px;
  background-color: ${props=> props.theme.colors.indigo2};
  border-radius: 5px;

  > * {
    margin-top: 0px;
    margin-bottom: 64px;
  }

  > *:last-child {
    margin-bottom: 0;
  }

  ${breakpoint('lg')`
    grid-row: 2/3;
    grid-column: 2/3;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 525px;
    width: 125%;
  `}
`;



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