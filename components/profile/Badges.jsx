import { breakpoint, getProp } from '@carpenjk/prop-x/css';
import styled from 'styled-components';
import Badge from './Badge';

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
  ${breakpoint('ms')`
    margin: 0;
    gap: 24px;
    > * {
      margin: 0;
    }
  `}

`;
const Badges = () => {
return ( 
      <StyledBadges gap={['12px', '18px', '24px']}>
        <Badge>Javascript</Badge><Badge>React</Badge><Badge>NEXT.js</Badge><Badge>Node.js</Badge><Badge>MongoDB</Badge><Badge>SQL</Badge><Badge>GIT</Badge><Badge>npm</Badge><Badge>Jest</Badge><Badge>Contentful</Badge>
      </StyledBadges> 
    );
};
export default Badges;