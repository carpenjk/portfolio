export const snapShotAnimation = (bln) => ({
  transform: bln
    // ? `scale(.7)
    //    perspective(550px)
    //    translate3d(0%, 0%, 0px)
    //   `
    // : `scale(1)
    //    perspective(550px)
    //    translate3d(0%, 0%, 0px)
    ? `perspective(550px)
       translate3d(0%, 0%, 0px)
      `
    : `perspective(550px)
       translate3d(50%, 0%, 0px)
      `,
    width: bln ? "85%" : "125%",
    left: bln ? '0%' : `-25%`,
  // transformOrigin: 'top left',
  config: {
    mass: 1,
    tension: 130,
    friction: 24,
    clamp: true
  }
});

export const snapshotSmallScreen = {
  transform: 
    `scale(1)
    perspective(400px)
    translate3d(0%, 0%, 0px)
    `,
  left: '0%',
  transformOrigin: 'top left',
  config: {
    mass: 1,
    tension: 130,
    friction: 24,
    clamp: true
  }
};