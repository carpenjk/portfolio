import * as Tabs from '@radix-ui/react-tabs';
import { ProjectFilter } from './styled/ProjectFilter';
import useIsMounted from '../../hooks/useIsMounted';
import { StyledFilters } from './styled/AnimatedFilters';
import { scrollAnimationConfig } from '../../animation/scrollTo/scrollAnimation';
import { StyledProjectFilters } from './styled/StyledProjectFilters';
import { AnimatedFilter } from './styled/AnimatedFilter';
import { AnimatedBorder } from './styled/AnimatedBorder';
import { FiltersWrapper } from './styled/FiltersWrapper';
import useFiltersAnimations from '../../animation/projectFilters/useFiltersAnimations';
import { useState } from 'react';
import useScrollTo from '../../animation/hooks/useScrollTo';

const filters = [
  {text: 'All', type: 'all'},
  {text: 'Websites', type: 'website'},
  {text: 'Libraries', type: 'library'},
  {text: 'Reusable Component', type: 'reusableComponent'}
];

const ProjectFilters = ({breakpoints, isPinned, onFilter, filtersRef}) => { 
  const isMdBreakpoint = breakpoints && breakpoints.current.width >= breakpoints.br.md;
  const isMounted = useIsMounted();
  const [currentFilter, setCurrentFilter] = useState('all');
  const filterFontSize = isMdBreakpoint ? 16 : 12;
  const animatedTop = isMdBreakpoint ? "53px" : "29px";
  const {borderAnimation, textAnimation, pinAnimation} = useFiltersAnimations({
    isPinned, 
    fontSize:`${filterFontSize}px`, 
    top: animatedTop
  });

  const scrollTo = useScrollTo({
    config: {...scrollAnimationConfig, delay: 50},
  });

  const handleClick = (type) => {
    const offset = isMdBreakpoint ? 200 : 195;
    setCurrentFilter(type);
    onFilter(type);
    scrollTo('#work', offset);
  };

  const position = isPinned ? 'fixed' : 'absolute';
  return ( 
      <FiltersWrapper ref={filtersRef}>
        <StyledFilters
          position="absolute"
          top="0"
          style={isMounted
            ? {...pinAnimation, position}  
            : undefined
          }>
          <StyledProjectFilters >
            <Tabs.List>{filters.map((filter) => (
              <AnimatedFilter
              key={filter.text}
              style={isMounted && ({
                ...textAnimation,
              })}
              >
                <ProjectFilter 
                  $isSelected={filter.type === currentFilter}
                  onClick={()=> handleClick(filter.type)} 
                  >
                    {filter.text}
                  </ProjectFilter>
              </AnimatedFilter>
            ))}
            </Tabs.List>
          </StyledProjectFilters> 
          <AnimatedBorder style={borderAnimation} />
        </StyledFilters>
      </FiltersWrapper>
  );
};
export default ProjectFilters;