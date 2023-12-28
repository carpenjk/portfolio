import { StyledBadge } from './styled/StyledBadge';
import ImageBadge from './ImageBadge';
import { StyledBadges } from './styled/StyledBadges';

const nextImage = {
  width:['33px','40px'],
  height:['20px','32px'],
  alt: "Next.js",
  src: "/techIcons/next.svg"
};
const npmImage = {
  width: [31, 46],
  height: [12, 18],
  alt: "npm",
  src: "/techIcons/npm.svg"

};

const tailwindImage = {
  width:['160px','160px'],
  height:['20px','32px'],
  alt: "Next.js",
  src: "/techIcons/tailwindcss-logotype.svg"
};
const Badges = () => {
return ( 
      <StyledBadges gap={['12px', '18px', '24px']}>
        <StyledBadge>JavaScript</StyledBadge>
        <StyledBadge>TypeScript</StyledBadge>
        <StyledBadge>React</StyledBadge>
        <ImageBadge alt="Next" padding={["0 4px", "0 8px"]} image={nextImage}></ImageBadge>
        <ImageBadge alt="Tailwind CSS" padding={["0 4px", "0 8px"]} image={tailwindImage}></ImageBadge>
        <StyledBadge>MongoDB</StyledBadge>
        <StyledBadge>SQL</StyledBadge>
        <StyledBadge>GIT</StyledBadge>
        <ImageBadge alt="npm" padding={["0 6px", "0 8px"]} image={npmImage}></ImageBadge>
        <StyledBadge>Jest</StyledBadge>
        <StyledBadge>Contentful</StyledBadge>
      </StyledBadges> 
    );
};
export default Badges;