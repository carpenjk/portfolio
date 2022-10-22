import { fadeMotionConfig } from "../fadeMotionConfig";
export const fadeInMotionAnimation = ({trigger, x = 0, y=0}) => ({
  opacity: trigger ? 1 : 0,
  x: trigger ? 0 : x,
  y: trigger ? 0 : y,
  fadeMotionConfig
});

