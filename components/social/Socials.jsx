import SocialLink from './SocialLink';
import { StyledSocials } from './styled/StyledSocials';

const Socials = () => {
  return ( 
    <StyledSocials>
      <li>
        <SocialLink 
          icon="/linkIcons/githubIcon.svg"
          href="https://github.com/carpenjk"
        >
            Github
        </SocialLink>
      </li>
      <li>
        <SocialLink 
          icon="/linkIcons/linkedInIcon.svg"
          href="https://www.linkedin.com/in/jcarpenterdev"
        >
          LinkedIn
        </SocialLink>
      </li>
      <li>
      <SocialLink
        icon="/linkIcons/emailIcon.svg"
        href="mailto:jcarpenterdev@gmail.com"
      >
        jcarpenterdev@gmail.com
      </SocialLink>
      </li>
    </StyledSocials>
  );
};
export default Socials;