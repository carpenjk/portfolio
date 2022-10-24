import { StyledProjectTypeBox } from "./styled/StyledProjectTypeBox";
import { StyledType } from "./styled/StyledType";

const ProjectTypeBox = ({style, children}) => {
  return ( 
    <StyledProjectTypeBox style={style}>
      <StyledType>{children}</StyledType>
    </StyledProjectTypeBox> );
};
 
export default ProjectTypeBox;