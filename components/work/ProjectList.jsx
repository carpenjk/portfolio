import { useEffect, useState } from 'react';
import { useTransition } from '@react-spring/web';
import { AnimatedDiv } from '../animation/AnimatedDiv';
import { StyledProjectList } from './styled/StyledProjectList';
import { StyledProjectListItem } from './styled/StyledProjectListItem';
import { StyledMoreButton } from './styled/StyledMoreButton';
import Project from './project/Project';

const INCREMENT = 2;
const ProjectList = ({projects, breakpoints}) => {

  const [loaded, setLoaded] = useState(projects.slice(0, INCREMENT)); 
 
  useEffect(() => {
    setLoaded(projects.slice(0, INCREMENT));
  }, [projects]);

  const transitions = useTransition( loaded, {
    from: { y: '100vh', opacity: 0  },
    enter: { y: '0vh', opacity: 1 },
    leave: { y: '100vh', opacity: 0 },
    config: { mass: 1, tension: 850, friction: 180 },
    keys: item=> item.name,
  });

  const handleLoadMoreClick = () => {
    setLoaded(prev => 
      ([...prev, ...projects.slice(prev.length, prev.length + INCREMENT)]));
  };

  return ( 
      <StyledProjectList>
        {transitions((styles, item) => (
          <StyledProjectListItem >
            <AnimatedDiv
              style={{
                width: "100%",
                ...styles}}>
                <Project project={item} breakpoints={breakpoints} />
            </AnimatedDiv>
          </StyledProjectListItem>
          ))}
        <StyledMoreButton disabled={loaded.length >= projects.length} type="button" onClick={handleLoadMoreClick}>More Projects</StyledMoreButton>
      </StyledProjectList> 
  );
};
export default ProjectList;