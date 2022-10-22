import { StyledProjectTypeBox } from "./styled/StyledProjectTypeBox";
import { StyledType } from "./styled/StyledType";

const ProjectTypeBox = ({style, type}) => {
  return ( 
    <StyledProjectTypeBox style={style}>
      <StyledType>{type}</StyledType>
    </StyledProjectTypeBox> );
};
 
export default ProjectTypeBox;