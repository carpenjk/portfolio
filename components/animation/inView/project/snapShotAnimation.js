export const snapShotAnimation = (bln) => ({
  transform: bln
    ? `perspective(550px)
       translate3d(0%, 0%, 0px)
      `
    : `perspective(550px)
       translate3d(50%, 0%, 0px)
      `,
    width: bln ? "85%" : "125%",
    left: bln ? '0%' : `-25%`,
  config: {
    mass: 1,
    tension: 130,
    friction: 24,
    clamp: true
  }
});

export const snapshotSmallScreen = {
  transform: 
    `perspective(400px)
     translate3d(0%, 0%, 0px)
    `,
  width: '100%',
  left: '0%',
  config: {
    mass: 1,
    tension: 130,
    friction: 24,
    clamp: true
  }
};