import styled from 'styled-components';
import { forwardRef } from 'react';

const StyledViewport = styled.div`
    position: absolute;
    top: -121px;
    width: 100%;
    height: 100%;
    max-height: 100vh;
`;



const Viewport = forwardRef((props, ref) => {
  return (<StyledViewport ref={ref} />);
});

Viewport.displayName = "Viewport";
export default Viewport;