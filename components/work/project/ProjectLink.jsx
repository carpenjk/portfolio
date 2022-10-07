import styled from 'styled-components';
import Link from 'next/link';
import LinkIcon from '../../social/LinkIcon';
import { breakpoint } from '@carpenjk/prop-x/css';

const StyledLink = styled.div`
  &:hover {
    background-color: ${props=> props.theme.colors.indigo5};
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
    height: 100px;
  }

  div {
    font-family: 'Comfortaa';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 13px;
    text-decoration-line: underline;
    text-align: center;
    color: ${props=> props.theme.colors.grass11};
    border-radius: 5px;
  }

  ${breakpoint('lg')`
    width: calc(225% - 600px);
    min-width: calc(75% + 1px);
    max-width: calc(100% + 2px - calc(600px - 100%));
    height: 86px;
    a {
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      width: calc(100% - 1px);
      height: 83px;
    }
    
    div {
      font-size: 14px;
    }
  `}

`;
const ProjectLink = ({link}) => {
  return ( 
    <StyledLink>
      <Link href={link.path}>
        <a>
          <LinkIcon icon={link.icon} direction={["vertical", "vertical", "horizontal"]}/>
          <div>{link.text}</ div>
        </a>
      </Link>
    </StyledLink>
  );
};
export default ProjectLink;