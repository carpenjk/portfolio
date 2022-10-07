import { snapTopConfig } from "./snapTopConfig";
export const snapTopBorder = (trigger) => ({
  opacity: trigger ? 1 : 0,
  config: snapTopConfig
});
