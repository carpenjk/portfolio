import styled from 'styled-components';
import { useRef, useState, useEffect } from 'react';
import {useSpring} from 'react-spring';
import theme from '../../theme/theme';
import useInScrollRange from '../hooks/useInScrollRange';
import ProjectFilters from './ProjectFilters';
import ProjectList from './ProjectList';

const StyledProjects = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0 90px 0;
  background-color: ${props=> props.theme.colors.indigo3};
`;

const snapTopAnimation = {
  from: {
    opacity: 0
  },
  to: {
   opacity: 1
  },
  config:{
    mass: 1,
    tension: 210,
    friction: 20,
    clamp: true
  },
};

const Projects = () => {
  const projectsRef = useRef();
  const isFiltersPinned = useInScrollRange({target: projectsRef, top: 95});
  const [isMounted, setIsMounted] = useState(false);
  const [animationStyle, animation] = useSpring(() => ({}));

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if(isMounted && isFiltersPinned){
      console.log('isFiltersPinned');
      animation.start(snapTopAnimation);
      return;
    }
    console.log('is not pinned');
    animation.start({
      ...snapTopAnimation,
      reverse: true,
  });
  }, [isFiltersPinned, isMounted, animation]);


  return ( 
        <StyledProjects ref={projectsRef}>
          <ProjectFilters 
            isPinned={isFiltersPinned}
            animation={animationStyle}  />
          <ProjectList />
        </StyledProjects> 
  );
};
export default Projects;