import styled from 'styled-components';
import Title from './Title';
import Name from './Name';

const StyledCredentials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 8px;
  
  > :first-child {
    margin-bottom: 4px;
  }

`;
const Credentials = (props) => {
return ( <StyledCredentials><Name/><Title/></StyledCredentials> );
};
export default Credentials;