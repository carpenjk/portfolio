import ProjectTech from './ProjectTech';
import ProjectSnapshot from './ProjectSnapshot';
import ProjectOverview from './overview/ProjectOverview';
import ProjectLinks from './ProjectLinks';
import useProjectInViewAnimations from '../../animation/inView/project/useProjectInViewAnimations';
import { useEffect, useState } from 'react';
import { StyledProject } from './styled/StyledProject';
import { StyledProjectContent } from './styled/StyledProjectContent';
import { StyledProjectHeader } from './styled/StyledProjectHeader';
import ProjectTypeBox from './ProjectTypeBox';

const Project = ({ project}) => {
  const [isMounted, setIsMounted] = useState(false);
  const {name, tech, type, snapshot, overview, links} = project;
  const {inViewRef, snapshotStyle, overviewStyle, techStyle, linkStyle} = useProjectInViewAnimations();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  return (
      <StyledProject ref={inViewRef}>
          <StyledProjectHeader>{name}</StyledProjectHeader>
        <StyledProjectContent>
          <ProjectTech tech={tech} style={isMounted ? techStyle : undefined} />
          {type !== 'library' && (
            <ProjectSnapshot style={isMounted ? snapshotStyle : undefined} image={snapshot}/>
          )}
          {type === 'library' && (
            <ProjectTypeBox style={isMounted ? snapshotStyle : undefined} type={"Library"}/>
          )}
          <ProjectOverview overview={overview} style={isMounted ? overviewStyle : undefined}/>
          <ProjectLinks links={links} style={isMounted ? linkStyle : undefined} />
        </StyledProjectContent>
      </StyledProject> );
};
export default Project;