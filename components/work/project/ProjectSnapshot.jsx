import Image from 'next/image';
import { StyledProjectSnapshot } from './styled/StyledProjectSnapshot';

const ProjectSnapshot = ({style, image}) => {

  return (
    <StyledProjectSnapshot style={style}>
      <Image 
        src={image.src} 
        alt={image.alt} 
        width={"700px"}
        height={"560px"}
        quality="85"
      />
    </StyledProjectSnapshot>
    );
};
export default ProjectSnapshot;