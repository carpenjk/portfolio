import Image from 'next/image';
import { StyledProfilePicture } from './styled/StyledProfilePicture';

const ProfilePicture = () => {
return ( <StyledProfilePicture><div><Image alt="profile" src="/profile/profile.png" height={300} width={300}/></div></StyledProfilePicture> );
};
export default ProfilePicture;