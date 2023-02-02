import { navData } from '../data/nav';
import Head from 'next/head';
import Logo from '../components/logo/Logo';
import Header from '../components/header/Header';
import NavMenu from '../components/header/NavMenu/NavMenu';
import Splash from '../components/splash/Splash';
import Profile from '../components/profile/Profile';
import { Section } from '../components/base/base';
import Work from '../components/work/Work';
import FooterCTA from '../components/footer/FooterCTA';
import Footer from '../components/footer/Footer';
import useOnLoadAnimation from '../components/animation/onPageLoad/useOnLoadAnimation';
import useScrollNav from '../components/header/useScrollNav';
import { NavContextProvider } from '../components/header/NavMenu/NavContext';
import { scrollAnimation } from '../components/animation/scrollTo/scrollAnimation';

export default function Home() {
  const navNames = navData.map(item=> item.name);
  const onLoadAnimations = useOnLoadAnimation({navItems: navNames });
  const navItems = useScrollNav(navData);

  return (
    <div className='home_container'>
      <Head>
        <title>Jeremy Carpenter, web developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"></meta>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavContextProvider items={navItems} scrollAnimation={scrollAnimation}>
        <Header>
          <Logo/>
          <NavMenu 
            items={navItems} 
          />
        </Header>
        <main >
          <Section id="splash" style={{marginBottom: 0}}>
            <Splash animation={onLoadAnimations.splash}/>
          </Section>
          <Section id="who" ref={navItems[0].ref}>
            <Profile  />
          </Section>
          <Section id="work" ref={navItems[1].ref}>
            <Work/>
          </Section>
        </main>
        <Footer id="contact" ref={navItems[2].ref}>
          <FooterCTA />
        </Footer>
      </NavContextProvider>
    </div>
  );
}
