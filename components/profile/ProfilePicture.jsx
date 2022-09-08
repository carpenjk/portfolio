import Image from 'next/image';
import styled from 'styled-components';

const StyledProfilePicture = styled.div`
  padding: 25px;
  border: 1px solid ${props=> props.theme.colors.orange6};
  border-radius: 5px;
`;
const ProfilePicture = () => {
return ( <StyledProfilePicture><Image alt="profile" src="/profile/profile.png" height={250} width={250}/></StyledProfilePicture> );
};
export default ProfilePicture;