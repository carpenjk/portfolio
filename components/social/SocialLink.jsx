import Link from 'next/link';
import LinkIcon from './LinkIcon';
import { SocialText } from '../base/SocialText';
import useSpringToggle from "../animation/hooks/useSpringToggle";
import { AnimatedSpan } from "../animation/AnimatedSpan";
import { StyledSocialLink } from './styled/StyledSocialLink';

const SocialLink = ({children, href, icon}) => {
  const [iconStyles, iconToggle] = useSpringToggle({
    from: {rotateZ: 0},
    to:{rotateZ: 360},
    config: {
      tension: 100,
      friction: 25,
    }
  });
  const [textStyles, textToggle] = useSpringToggle({
    from: {
      transform: 'perspective(500px) translate3d(0px, 0px, 0px)',
    },
    to: {
      transform: 'perspective(500px) translate3d(5px, 0px, 25px)',
    },
    config: {clamp: true, mass: 10, tension: 300, friction: 20}
  });

  const handleMouseEnter = () =>{
    iconToggle(true);
    textToggle(true);
  };
  const handleMouseLeave = () => {
    iconToggle(false);
    textToggle(false);
  };


return ( 
  <Link href={href}>
    <a>
      <StyledSocialLink onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
        <AnimatedSpan style={iconStyles}><LinkIcon margin="0" width="24px" height="24px" icon ={icon} /></AnimatedSpan>
        <AnimatedSpan style={textStyles}>
          <SocialText >{children}</SocialText>
        </AnimatedSpan>
      </StyledSocialLink>
    </a>
  </Link> 
);
};
export default SocialLink;