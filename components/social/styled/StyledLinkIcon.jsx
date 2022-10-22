import styled from "styled-components";
import { breakpoint, getProp } from "@carpenjk/prop-x/css";

export const StyledLinkIcon = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-item: center;
  margin: ${getProp('margin')};
  width:  ${getProp('width')};
  height:  ${getProp('height')};

  ${breakpoint('xmd')`
    width: 24px;
    height: 24px;
    margin: ${getProp('margin')};
  `}
`;

StyledLinkIcon.defaultProps = {
  width: ['20px', '20px', '24px'],
  height: ['20px', '20px', '24px'],
};