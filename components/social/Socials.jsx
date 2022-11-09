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
          icon="/linkIcons/linkedinIcon.svg"
          href="https://www.linkedin.com/in/jeremy-carpenter-7bb7096/"
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