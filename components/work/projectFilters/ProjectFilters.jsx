import * as Tabs from '@radix-ui/react-tabs';
import theme from '../../../theme/theme';
import { ProjectFilter } from './styled/ProjectFilter';
import useIsMounted from '../../hooks/useIsMounted';
import { AnimatedFilters } from './styled/AnimatedFilters';
import { StyledProjectFilters } from './styled/StyledProjectFilters';
import { AnimatedFilter } from './styled/AnimatedFilter';
import { AnimatedBorder } from './styled/AnimatedBorder';
import { FiltersWrapper } from './styled/FiltersWrapper';
import useBreakpoints from '@carpenjk/prop-x/useBreakpoints';
import useFiltersAnimations from '../../animation/projectFilters/useFiltersAnimations';


const ProjectFilters = ({isPinned}) => { 
  const br = useBreakpoints(theme);
  const isMounted = useIsMounted();
  const filterFontSize = br.current.width >= br.br.md ? 16 : 12;
  const filterAnimations = useFiltersAnimations({
    trigger: isPinned, fontSize:`${filterFontSize}px`
  });

  return ( 
      <FiltersWrapper>
        <AnimatedFilters
          position={isPinned ? 'fixed' : 'absolute'}
          top={isPinned ? ['93px', '121px', '121px'] : 'auto'}
          bottom= {isPinned ? 'auto' : '0px'}
          >
          <StyledProjectFilters >
            <Tabs.List>
              <AnimatedFilter
              style={isMounted && ({
                background: theme.colors.orange5,
                ...filterAnimations.text,
              })}>
                <ProjectFilter >All</ProjectFilter>
              </AnimatedFilter>
              <AnimatedFilter
              style={isMounted && ({
                background: 'none',
                ...filterAnimations.text,
              })}>
                <ProjectFilter >Dev Tools</ProjectFilter>
              </AnimatedFilter>
              <AnimatedFilter
              style={isMounted && ({
                background: 'none',
                ...filterAnimations.text,
              })}>
                <ProjectFilter >Reusable Components</ProjectFilter>
              </AnimatedFilter>
              <AnimatedFilter
              style={isMounted && ({
                background: 'none',
                ...filterAnimations.text,
              })}>
                <ProjectFilter >Websites</ProjectFilter>
              </AnimatedFilter>
            </Tabs.List>
          </StyledProjectFilters> 
          <AnimatedBorder style={filterAnimations.border} />
        </AnimatedFilters>
      </FiltersWrapper>
  );
};
export default ProjectFilters;