import Link from 'next/link';
import LinkIcon from './LinkIcon';
import { SocialText } from '../base/SocialText';
import { AnimatedSpan } from "../animation/AnimatedSpan";
import { StyledSocialLink } from './styled/StyledSocialLink';
import useLinkHoverAnimation from '../animation/other/useLinkHoverAnimation';

const SocialLink = ({children, href, icon}) => {

const {onMouseEnter, onMouseLeave, iconStyle, textStyle} = useLinkHoverAnimation();
return ( 
  <Link href={href}>
    <a>
      <StyledSocialLink onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
        <AnimatedSpan style={iconStyle}><LinkIcon margin="0" width="24px" height="24px" icon ={icon} /></AnimatedSpan>
        <AnimatedSpan style={textStyle}>
          <SocialText >{children}</SocialText>
        </AnimatedSpan>
      </StyledSocialLink>
    </a>
  </Link> 
);
};
export default SocialLink;