import styled from "styled-components";
import { getProp } from "@carpenjk/prop-x/css";

export const Spacer = styled.div`
  height: ${getProp('height')};
  width: ${getProp('width')};
`;