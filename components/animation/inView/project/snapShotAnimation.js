export const snapShotAnimation = (bln) => ({
  transform: bln
    ? `scale(1)
       perspective(400px)
       translate3d(0%, 0%, 0px)
      `
    : `scale(1.30)
       perspective(400px)
       translate3d(50%, 0%, 0px)
      `,
  left: bln ? '0%' : `-9.5%`,
  transformOrigin: 'top left',
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