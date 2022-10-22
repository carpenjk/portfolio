import { unwindProps } from '@carpenjk/prop-x';
import Image from 'next/image';
import { StyledLinkIcon } from './styled/StyledLinkIcon';

const LinkIcon = ({direction, icon, iconMargin = ["12px", "24px"], ...iconProps}) => {
  const margin = unwindProps({direction, iconMargin}).map((unwound) => unwound.direction === "vertical" ? `0 0 ${unwound.iconMargin} 0` : `0 ${unwound.iconMargin} 0 0`);
  return (
    <StyledLinkIcon margin={margin} {...iconProps} >
      <Image layout="fill" src={icon} alt="icon"/>
    </StyledLinkIcon> );
};
export default LinkIcon;