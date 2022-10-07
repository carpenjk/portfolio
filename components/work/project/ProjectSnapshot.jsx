import { breakpoint } from '@carpenjk/prop-x/css';
import Image from 'next/image';
import styled from 'styled-components';
import { AnimatedDiv } from '../../animation/AnimatedDiv';

const StyledProjectSnapshot = styled(AnimatedDiv)`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  ${breakpoint('lg')`  
    grid-row: 1/2;
    grid-column: 1/2;
    width: 333px;
    position: absolute;
    top: 0;
    left: 0;
    width: 85%;
    min-width: 333px;
    transform-origin: top left;
    transform: scale(1.3) perspective(400px) translate3d(50%, 0%, 0px);
    left: -9.5%;
  `}
`;

const ProjectSnapshot = ({style, image}) => {

  return (
    <StyledProjectSnapshot style={style}>
      <Image 
        src={image.src} 
        alt={image.alt} 
        width={"700px"}
        height={"560px"}
      />
    </StyledProjectSnapshot>
    );
};
export default ProjectSnapshot;