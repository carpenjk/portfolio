import styled from 'styled-components';
import * as Tabs from '@radix-ui/react-tabs';
import theme from '../../theme/theme';
import {ProjectFilter} from './ProjectFilter';
import { AnimatedDiv } from '../animation/AnimatedDiv';
import { useSpring } from 'react-spring';
import { breakpoint } from '@carpenjk/prop-x/css';

const Animated = styled(AnimatedDiv)`
  position ${props=> props.position};
  top: ${props=> props.top};
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 7px;
  z-index: 9999;
  background: ${props=> props.theme.colors.indigo3};
`;
const StyledProjectFilters = styled(Tabs.Root)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const Test = styled(AnimatedDiv)`
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  border-bottom: ${props=> props.theme.colors.indigo5} solid 1px;
  opacity: 0;
`;

const AnimatedFilter = styled(AnimatedDiv)`
  font-size: 12px;
  ${breakpoint('md')`
    font-size: 16px;
  `}
`;

const ProjectFilters = ({animation, isPinned}) => { 
  const style = useSpring({
    fontSize: isPinned ? '12px' : '16px'
  });
  return ( 
      <Animated  
        position={isPinned ? 'fixed' : 'relative'}
        top={isPinned ? '121px' : '0px'}
        >
        <StyledProjectFilters >
          <Tabs.List>
            <AnimatedFilter
            style={{
              background: theme.colors.orange5,
              ...style,
            }}>
              <ProjectFilter >All</ProjectFilter>
            </AnimatedFilter>
            <AnimatedFilter
            style={{
              background: 'none',
              ...style,
            }}>
              <ProjectFilter >Dev Tools</ProjectFilter>
            </AnimatedFilter>
            <AnimatedFilter
            style={{
              background: 'none',
              ...style,
            }}>
              <ProjectFilter >Reusable Components</ProjectFilter>
            </AnimatedFilter>
            <AnimatedFilter
            style={{
              background: 'none',
              ...style,
            }}>
              <ProjectFilter >Websites</ProjectFilter>
            </AnimatedFilter>
          </Tabs.List>
        </StyledProjectFilters> 
        <Test style={animation} />
      </Animated>
  );
};
export default ProjectFilters;