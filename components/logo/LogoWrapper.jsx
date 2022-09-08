import styled from 'styled-components';

const StyledLogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const LogoWrapper = ({children}) => {
  return ( <StyledLogoWrapper>{children}</StyledLogoWrapper> );
};
export default LogoWrapper;