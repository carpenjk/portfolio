import Image from 'next/image';
import { StyledLinkIcon } from './styled/StyledLinkIcon';

const LinkIcon = ({direction, icon, ...iconProps}) => {
  return (
    <StyledLinkIcon {...iconProps} >
      <Image layout="fill" src={icon} alt="icon"/>
    </StyledLinkIcon> );
};
export default LinkIcon;