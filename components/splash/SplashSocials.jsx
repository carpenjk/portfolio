import { useContext, useEffect, useState } from 'react';
import { useSpring } from 'react-spring';
import { NavContext } from '../header/NavMenu/NavContext';
import SocialLink from '../social/SocialLink';
import { StyledSplashSocials } from './styled/StyledSplashSocials';
import { fadeMotionConfig } from '../animation/inView/fadeMotionConfig';

const SplashSocials = () => {
  const {navItems} = useContext(NavContext);
  const isScrolledToContacts = navItems
    .find(item=> item.name === 'Contact')
    .inView;

  const fadeStyles = useSpring({
    opacity: isScrolledToContacts ? 0 : 1,
    x: isScrolledToContacts ? "-20px" : "0px",
    fadeMotionConfig
  });

  return ( 
      <StyledSplashSocials style={fadeStyles}>
        <ul>
          <li>
            <SocialLink 
              collapsed={true}
              icon="/linkIcons/githubIcon.svg"
              href="/"
            />
          </li>
          <li>
            <SocialLink 
              collapsed={true}
              icon="/linkIcons/linkedinIcon.svg"
              href="/"
            />
          </li>
          <li>
            <SocialLink
              collapsed={true}
              icon="/linkIcons/emailIcon.svg"
              href="/"
            />
          </li>
        </ul>
      </StyledSplashSocials>
  );
};
export default SplashSocials;