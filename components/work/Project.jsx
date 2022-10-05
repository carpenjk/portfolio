import styled from 'styled-components';
import { breakpoint } from '@carpenjk/prop-x/css';
import ProjectHeader from './ProjectHeader';
import ProjectTech from './ProjectTech';
import ProjectSnapshot from './ProjectSnapshot';
import ProjectOverview from './overview/ProjectOverview';
import ProjectLinks from './ProjectLinks';
import useProjectInViewAnimations from '../animation/inView/project/useProjectInViewAnimations';
import { useEffect, useState } from 'react';

const StyledProject = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const StyledContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  ${breakpoint('lg')`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    height: 602px;
  `}
`;

const Project = ({project}) => {
  const [isMounted, setIsMounted] = useState(false);
  const {name, tech, snapshot, overview, links} = project;
  const {inViewRef, snapshotStyle, overviewStyle, techStyle, linkStyle} = useProjectInViewAnimations();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
      <StyledProject ref={inViewRef}>
          <ProjectHeader name={name} />
        <StyledContent>
          <ProjectTech tech={tech} style={isMounted ? techStyle : undefined} />
          <ProjectSnapshot style={isMounted ? snapshotStyle : undefined} image={snapshot}/>
          <ProjectOverview overview={overview} style={isMounted ? overviewStyle : undefined}/>
          <ProjectLinks links={links} style={isMounted ? linkStyle : undefined} />
        </StyledContent>
      </StyledProject> );
};
export default Project;