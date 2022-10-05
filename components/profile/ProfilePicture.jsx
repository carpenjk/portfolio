import { breakpoint } from '@carpenjk/prop-x/css';
import Image from 'next/image';
import styled from 'styled-components';

const StyledProfilePicture = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center; 
  padding: 25px;
  border-radius: 5px;
  min-width: 276px;  

  > div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 25px;
    border: 1px solid ${props=> props.theme.colors.orange6};
    border-radius: 5px;  
  }

  ${breakpoint('sm')`
    width: 326px;
    max-width: 326px;
    max-height: 326px;
  `}
`;
const ProfilePicture = () => {
return ( <StyledProfilePicture><div><Image alt="profile" src="/profile/profile.png" height={300} width={300}/></div></StyledProfilePicture> );
};
export default ProfilePicture;