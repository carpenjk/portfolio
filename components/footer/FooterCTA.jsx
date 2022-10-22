import { breakpoint, getProp } from '@carpenjk/prop-x/css';
import styled from 'styled-components';
import { Content } from '../base/base';
import Socials from '../social/Socials';
import CTA from './CTA';

const StyledFooterCTA = styled(Content)`
  position: relative;
  display: grid;
  grid-template-rows: auto auto;
  justify-content: center;
  align-items: center;
  
  ${breakpoint('md')`
    grid-template-rows: auto;
    grid-template-columns: auto 1fr;
    flex-direction: column;
  `}
`;

const StyledCell = styled.div`
  ${breakpoint(['zero', 'xmd'])`
    grid-row: ${getProp('gridRow')};
    grid-column: ${getProp('gridColumn')};
  `}
`;

const FooterCTA = () => {
  return (
    <StyledFooterCTA>
      <StyledCell 
        gridRow={["2/3", "2/3", "1/2"]}
        gridColumn={["1/2", "1/2", "1/2"]}
      >
          <Socials/>
      </StyledCell>
      <StyledCell
        gridRow={["1/2", "1/2", "1/2", "1/2"]}
        gridColumn={["1/2", "1/2", "2/3"]}
      >
        <CTA />
      </StyledCell>
    </StyledFooterCTA>
  );
};
export default FooterCTA;