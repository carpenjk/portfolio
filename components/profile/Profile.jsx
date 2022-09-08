import styled from 'styled-components';
import { breakpoint } from '@carpenjk/prop-x/css';
import Content from '../Content';
import { H1 } from '../base/base';
import ProfilePicture from './ProfilePicture';
import ProfileOverview from './ProfileOverview';
import Technologies from './Technologies';

const StyledProfile = styled(Content)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 90px;

`;

const StyledInnerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 18px;
  background-color: ${props=> props.theme.colors.indigo2};
  border-radius: 5px;
  

  ${breakpoint('lg')`
    flex-direction: row;
    justify-content: space-between;
    padding: 0 18px;
    margin-bottom: 40px;
  `}
`;

const StyledHeader = styled(H1)`
  margin-bottom: 70px;
  margin-left: 2px;
`;

const Profile  = () => {
return ( 
    <StyledProfile>
      <StyledHeader>Who</StyledHeader>
      <StyledInnerWrapper>
        <ProfilePicture/>
        <ProfileOverview/>
      </StyledInnerWrapper>
      <Technologies />
    </StyledProfile> 
  );
};
export default Profile;