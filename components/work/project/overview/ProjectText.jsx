import breakpoints from '../../../../theme/breakpoints';
import { useState } from 'react';
import { useSpring } from 'react-spring';
import { P2 } from '../../../base/base';
import useBreakpoints from "@carpenjk/prop-x/useBreakpoints";
import {StyledExpandButton} from './styled/ExpandButton';
import { StyledButtonWrapper } from './styled/StyledButtonWrapper';
import { StyledInnerText } from './styled/StyledInnerText';
import { StyledProjectText } from './styled/StyledProjectText';

const ProjectText = ({text}) => {
  const br = useBreakpoints(breakpoints);
  const [isOpen, setIsOpen] = useState(false);

  const openMaxHeight = br.current.width < br.br.xmd ? '500px' : '260px';
  const animationStyles = useSpring({
    maxHeight: isOpen ? openMaxHeight : '63px',
    paddingBottom: isOpen ? '38px' : '0px',
    config: {
      mass: 1,
      tension: 70,
      friction: 15,
      clamp: true
    }

  });
  const buttonText = isOpen ? '- less' : '+ more';
  return ( 
    <StyledProjectText style = {animationStyles}>
      <StyledInnerText><P2>{text}</P2></StyledInnerText>
      <StyledButtonWrapper>
        <StyledExpandButton onClick={()=> setIsOpen(prev=> !prev)}>{buttonText}</StyledExpandButton>
      </StyledButtonWrapper>
    </StyledProjectText> 
  );
};
export default ProjectText;