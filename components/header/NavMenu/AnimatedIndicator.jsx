import styled from 'styled-components';
import {getProp} from '@carpenjk/prop-x/css';
import { AnimatedSpan } from '../../animation/AnimatedSpan';
import { useEffect } from 'react';

const StyledIndicatorWrapper = styled.div`
  position: relative;
  width: ${getProp('$indicatorWidth')};
`;

StyledIndicatorWrapper.defaultProps = {
  $indicatorWidth: '100%'
};

const StyledAnimatedIndicator = styled(AnimatedSpan)`
    position: absolute;
    top: ${getProp('$indicatorTop')};
    right: ${getProp('$indicatorRight')};
    bottom: ${getProp('$indicatorBottom')};
    left: ${getProp('$indicatorLeft')};
    width: ${getProp('$initialWidth')};
    height: ${getProp('$initialHeight')};
    background-color: transparent;
`;

StyledAnimatedIndicator.defaultProps = {
  $initialWidth: '0',
  $initialHeight: '3px',
  $indicatorTop: 'auto',
  $indicatorRight: 'auto',
  $indicatorBottom: '0',
  $indicatorLeft: '0'
};

const AnimatedIndicator = ({
    initialWidth,
    initialHeight,
    indicatorWidth,
    indicatorTop,
    indicatorRight,
    indicatorBottom,
    indicatorLeft,
    style
  }) => {

  return (
    <StyledIndicatorWrapper $indicatorWidth={indicatorWidth}>
      <StyledAnimatedIndicator
        $initialWidth={initialWidth}
        $initialHeight={initialHeight}
        $indicatorTop={indicatorTop}
        $indicatorRight={indicatorRight}
        $indicatorBottom={indicatorBottom}
        $indicatorLeft={indicatorLeft}
        style={style}
      />
    </StyledIndicatorWrapper> );
};
export default AnimatedIndicator;