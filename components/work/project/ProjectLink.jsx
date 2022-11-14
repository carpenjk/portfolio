import Link from 'next/link';
import { AnimatedDiv } from '../../animation/AnimatedDiv';
import { AnimatedSpan } from '../../animation/AnimatedSpan';
import useIsMounted  from '../../hooks/useIsMounted';
import useLinkHoverAnimation from '../../animation/other/useLinkHoverAnimation';
import LinkIcon from '../../social/LinkIcon';
import { StyledLink } from './styled/StyledProjectLink';

const ProjectLink = ({breakpoints, link}) => {
  const isMounted = useIsMounted();
  const linkAnimatedStyle = !link.disabled && isMounted && breakpoints.current.width >= breakpoints.br.xmd
    ? textStyle
    : undefined;
  const  {onMouseEnter, onMouseLeave, iconStyle, textStyle} = useLinkHoverAnimation();
  return ( 
    <Link href={link.path}>
      <a target="_blank"  disabled={link.disabled} style={{pointerEvents: link.disabled ? "none" : "initial" }}>
        <StyledLink onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} disabled={link.disabled}>
          <AnimatedSpan style={!link.disabled ? iconStyle : undefined}>
            <LinkIcon 
              icon={link.icon} 
              direction={["vertical", "vertical", "horizontal"]}
            />
          </AnimatedSpan>
          <AnimatedDiv 
            style={linkAnimatedStyle}>{link.text}</ AnimatedDiv>
        </StyledLink>
      </a>
    </Link>
  );
};
export default ProjectLink;