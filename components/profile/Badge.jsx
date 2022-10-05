import { breakpoint, getProp } from "@carpenjk/prop-x/css";
import styled from "styled-components";
const Badge =  styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 31px;
  background-color: ${props=> props.theme.colors.orange6};
  font-family: 'Comfortaa';
  font-style: normal;
  font-weight: normal;
  color: ${props=> props.theme.colors.orange12};
  border-radius: 5px;
  padding: ${getProp('padding')};
  font-size: ${getProp('fontSize')};

  > img {
    width: ${getProp('imgWidth')};
    height: ${getProp('imgHeight')};
  }

  ${breakpoint('md')`
    height: 34px;
    padding: ${getProp('padding')};
    font-size: ${getProp('fontSize')};
    
    > img {
      width: ${getProp('imgWidth')};
      height: ${getProp('imgHeight')};
    }
  `}
`;

Badge.defaultProps = {
  fontSize: ['14px', '14px','16px'],
  padding: '0 8px',
  imgHeight: ["20px", '32px'],
  imgWidth: 'auto'
};

export default Badge;