import { StyledProfile } from './styled/StyledProfile';
import { StyledProfileInnerWrapper } from './styled/StyledProfileInnerWrapper';
import ProfilePicture from './ProfilePicture';
import { StyledProfilePictureWrapper } from './styled/StyledProfilePictureWrapper';
import ProfileOverview from './ProfileOverview';
import Technologies from './Technologies';
import { SectionHeader } from '../base/SectionHeader';

const Profile  = () => {
return ( 
    <StyledProfile>
      <SectionHeader>Who</SectionHeader>
      <StyledProfileInnerWrapper>
        <StyledProfilePictureWrapper><ProfilePicture/></StyledProfilePictureWrapper>
        <ProfileOverview/>
      </StyledProfileInnerWrapper>
      <Technologies />
    </StyledProfile> 
  );
};
export default Profile;