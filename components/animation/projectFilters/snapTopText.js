import { snapTopConfig } from "./snapTopConfig";
export const snapTopText = ({trigger, fontSize}) => ({
  fontSize: trigger ? '12px' : fontSize,
  config: snapTopConfig
});
