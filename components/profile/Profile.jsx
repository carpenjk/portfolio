import styled from 'styled-components';
import { breakpoint } from '@carpenjk/prop-x/css';
import { Content } from '../base/base';
import { H1 } from '../base/base';
import ProfilePicture from './ProfilePicture';
import ProfileOverview from './ProfileOverview';
import Technologies from './Technologies';
import { SectionHeader } from '../base/SectionHeader';
import { Center } from '../base/Center';

const StyledProfile = styled(Content)`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 45px;

  ${breakpoint('lg')`
    justify-content: stretch;
  `}

`;

const StyledInnerWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 18px;
  background-color: ${props=> props.theme.colors.indigo2};
  border-radius: 5px;
  

  ${breakpoint('lg2')`
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    padding: 0 18px;
    margin-bottom: 40px;
    > *:first-child {
      flex: 0 0 45%;
    }
    > *:last-child {
      flex 1 1 55%;
    }
  `}
`;

const StyledProfileWrapper = styled(Center)`
  position: relative;
  width: 100%;
  padding: 32px;
`;


const Profile  = () => {
return ( 
    <StyledProfile>
      <SectionHeader>Who</SectionHeader>
      <StyledInnerWrapper>
        <StyledProfileWrapper><ProfilePicture/></StyledProfileWrapper>
        <ProfileOverview/>
      </StyledInnerWrapper>
      <Technologies />
    </StyledProfile> 
  );
};
export default Profile;