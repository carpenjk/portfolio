import { P2 } from '../../../base/base';
import ExpandButton from './ExpandButton';
import { StyledButtonWrapper } from './styled/StyledButtonWrapper';
import { StyledInnerText } from './styled/StyledInnerText';
import { StyledProjectText } from './styled/StyledProjectText';

const ProjectText = ({text}) => {
return ( 
  <StyledProjectText>
    <StyledInnerText><P2>{text}</P2></StyledInnerText>
    <StyledButtonWrapper><ExpandButton /></StyledButtonWrapper>
  </StyledProjectText> 
  );
};
export default ProjectText;