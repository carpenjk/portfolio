export const linkHoverAnimation = ({width, color}) => ({
  to: {
    width: width,
    backgroundColor: color,
  },
  from: {
    width: '0px',
    backgroundColor: 'transparent'
  },
  config: {
    mass: 10,
    tension: 300,
    friction: 20,
    clamp: true
  },
});