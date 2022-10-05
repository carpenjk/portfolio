import styled from 'styled-components';
import { P2 } from '../../base/base';
import ExpandButton from './ExpandButton';

const StyledProjectText = styled.div`
  position: relative;
  width: 100%;
  height: 63px;
  max-height: 63px;

`;

const StyledInnerText = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  > p {
    margin-top: 0;
  }
`;

const StyledButtonWrapper = styled.div`
  position: absolute;
  height: 38px;
  left: 0;
  bottom: -4px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`;


const ProjectText = ({text}) => {
return ( 
  <StyledProjectText>
    <StyledInnerText><P2>{text}</P2></StyledInnerText>
    <StyledButtonWrapper><ExpandButton /></StyledButtonWrapper>
  </StyledProjectText> 
  );
};
export default ProjectText;