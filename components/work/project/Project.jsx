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
import Image from 'next/image';
import { StyledStarWrapper } from './styled/StyledStarWrapper';

const Project = ({ project, breakpoints}) => {
  const [isMounted, setIsMounted] = useState(false);
  const {name, tech, type, snapshot, overview, links} = project;
  const {inViewRef, snapshotStyle, overviewStyle, techStyle, linkStyle} = useProjectInViewAnimations();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const isSelf = name === "Hello World";
  return (
      <StyledProject ref={inViewRef}>
          <StyledProjectHeader>{name}</StyledProjectHeader>
        <StyledProjectContent>
          {isSelf && (
            <ProjectTypeBox style={isMounted ? snapshotStyle : undefined} >
              You are Here
              <StyledStarWrapper>
                <Image width="26" height="26" alt= "star" src="/snapshots/star.svg"/>
              </StyledStarWrapper>
            </ProjectTypeBox>
          )}
          {!isSelf && type === 'library' &&  (
            <ProjectTypeBox style={isMounted ? snapshotStyle : undefined} >Library</ProjectTypeBox>
          )}
          <ProjectTech tech={tech} style={isMounted ? techStyle : undefined} />
          {!isSelf && type !== 'library' && (
            <ProjectSnapshot style={isMounted ? snapshotStyle : undefined} image={snapshot}/>
          )}
          <ProjectOverview overview={overview} style={isMounted ? overviewStyle : undefined}/>
          <ProjectLinks breakpoints={breakpoints} links={links} style={isMounted ? linkStyle : undefined} />
        </StyledProjectContent>
      </StyledProject> );
};
export default Project;