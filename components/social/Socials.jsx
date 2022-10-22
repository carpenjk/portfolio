import SocialLink from './SocialLink';
import { StyledSocials } from './styled/StyledSocials';

const Socials = () => {
  return ( 
    <StyledSocials>
      <li>
        <SocialLink 
          icon="/linkIcons/githubIcon.svg"
          href="/"
        >
            Github
        </SocialLink>
      </li>
      <li>
        <SocialLink 
          icon="/linkIcons/linkedinIcon.svg"
          href="/"
        >
          LinkedIn
        </SocialLink>
      </li>
      <li>
      <SocialLink
        icon="/linkIcons/emailIcon.svg"
        href="/"
      >
        jcarpenterdev@gmail.com
      </SocialLink>
      </li>
    </StyledSocials>
  );
};
export default Socials;