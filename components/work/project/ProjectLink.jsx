import Link from 'next/link';
import { AnimatedDiv } from '../../animation/AnimatedDiv';
import { AnimatedSpan } from '../../animation/AnimatedSpan';
import useIsMounted  from '../../hooks/useIsMounted';
import useLinkHoverAnimation from '../../animation/other/useLinkHoverAnimation';
import LinkIcon from '../../social/LinkIcon';
import { StyledLink } from './styled/StyledProjectLink';

const ProjectLink = ({breakpoints, link}) => {
  const isMounted = useIsMounted();
  const  {onMouseEnter, onMouseLeave, iconStyle, textStyle} = useLinkHoverAnimation();
  return ( 
    <Link href={link.path}>
      <a onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <StyledLink >
          <AnimatedSpan style={iconStyle}>
            <LinkIcon 
              icon={link.icon} 
              direction={["vertical", "vertical", "horizontal"]}
            />
          </AnimatedSpan>
          <AnimatedDiv style={isMounted && breakpoints.current.width >= breakpoints.br.xmd ? textStyle : undefined }>{link.text}</ AnimatedDiv>
        </StyledLink>
      </a>
    </Link>
  );
};
export default ProjectLink;