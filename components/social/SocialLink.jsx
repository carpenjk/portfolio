import styled from 'styled-components';
import Link from 'next/link';
import LinkIcon from './LinkIcon';
import { SocialText } from '../base/SocialText';
import { breakpoint, condition } from '@carpenjk/prop-x/css';
import useSpringToggle from "../animation/hooks/useSpringToggle";
import { AnimatedSpan } from "../animation/AnimatedSpan";

const StyledSocialLink = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  ${condition('collapsed')`
    > svg {
      color: ${props=> props.theme.colors.indigo10};
    }
    > div:last-child{
      opacity: 0%;
    }
  `}

  > span:last-child {
    margin-left: 12px;
  }
  &:hover > span:last-child > div {
    color: ${props=> props.theme.colors.grass11};
    transition: color 450ms ease-in-out, text-decoration 300ms ease-in-out;
  }

  &:hover {
    transition: opacity 400ms ease-in-out;
    ${condition('collapsed')`
      > div:last-child{
        opacity: 100%;
      }
    `}
  }
  ${breakpoint('sm')`
    > span:last-child {
      margin-left: 24px;
    }
  `}
`;

const SocialLink = ({children, href, icon, collapsed}) => {
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
      <StyledSocialLink onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} collapsed={collapsed}>
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