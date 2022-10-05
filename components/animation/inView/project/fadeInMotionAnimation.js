export const fadeInMotionAnimation = ({trigger, x = 0, y=0}) => ({
  opacity: trigger ? 1 : 0,
  x: trigger ? 0 : x,
  y: trigger ? 0 : y,
  config: {
    mass: 1,
    tention: 280,
    friction: 60,
    clamp: true
  }
});

