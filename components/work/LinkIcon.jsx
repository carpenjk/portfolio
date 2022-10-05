import { unwindProps } from '@carpenjk/prop-x';
import { breakpoint, getProp } from '@carpenjk/prop-x/css';
import Image from 'next/image';
import styled from 'styled-components';

const StyledLinkIcon = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-item: center;
  margin: ${getProp('margin')};
  width:  ${getProp('width')};
  height:  ${getProp('height')};

  ${breakpoint('lg')`
    width: 24px;
    height: 24px;
    margin: ${getProp('margin')};
  `}
`;

StyledLinkIcon.defaultProps = {
  width: ['20px', '20px', '24px'],
  height: ['20px', '20px', '24px'],
};

const LinkIcon = ({direction, icon, iconMargin = ["12px", "24px"], ...iconProps}) => {
  const margin = unwindProps({direction, iconMargin}).map((unwound) => unwound.direction === "vertical" ? `0 0 ${unwound.iconMargin} 0` : `0 ${unwound.iconMargin} 0 0`);
  return (
    <StyledLinkIcon margin={margin} {...iconProps} >
      <Image layout="fill" src={icon} alt="icon"/>
    </StyledLinkIcon> );
};
export default LinkIcon;