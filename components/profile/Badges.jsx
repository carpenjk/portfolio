import { breakpoint, getProp } from '@carpenjk/prop-x/css';
import styled from 'styled-components';
import Badge from './Badge';
import ImageBadge from './ImageBadge';

const StyledBadges = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  width: calc(100% + ${getProp('gap')});
  margin-left: -${getProp('gap')};

  > * {
    margin-left: ${getProp('gap')};
    margin-bottom: ${getProp('gap')};  
  }

  ${breakpoint(['md', 'lg'])`
    width: calc(100% + ${getProp('gap')});
    margin-left: -${getProp('gap')};
    > * {
      margin-left: ${getProp('gap')};
      margin-bottom: ${getProp('gap')};
    }
  `}
`;

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
const Badges = () => {
return ( 
      <StyledBadges gap={['12px', '18px', '24px']}>
        <Badge>Javascript</Badge>
        <Badge>React</Badge>
        <ImageBadge padding={["0 4px", "0 8px"]} image={nextImage}></ImageBadge>
        <Badge>Node.js</Badge>
        <Badge>MongoDB</Badge>
        <Badge>SQL</Badge>
        <Badge>GIT</Badge>
        <ImageBadge padding={["0 6px", "0 8px"]} image={npmImage}></ImageBadge>
        <Badge>Jest</Badge>
        <Badge>Contentful</Badge>
      </StyledBadges> 
    );
};
export default Badges;