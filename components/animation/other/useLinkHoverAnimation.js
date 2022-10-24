import useSpringToggle from "../hooks/useSpringToggle";

const useLinkHoverAnimation = () => {

  const [iconStyle, iconToggle] = useSpringToggle({
    from: {rotateZ: 0},
    to:{rotateZ: 360},
    config: {
      tension: 100,
      friction: 25,
    }
  });
  const [textStyle, textToggle] = useSpringToggle({
    from: {
      transform: 'perspective(500px) translate3d(0px, 0px, 0px)',
    },
    to: {
      transform: 'perspective(500px) translate3d(5px, 0px, 25px)',
    },
    config: {clamp: true, mass: 10, tension: 300, friction: 20}
  });

  const onMouseEnter = () =>{
    iconToggle(true);
    textToggle(true);
  };
  const onMouseLeave = () => {
    iconToggle(false);
    textToggle(false);
  };


  return ( {
    onMouseEnter,
    onMouseLeave,
    iconStyle,
    textStyle
  } );
};
 
export default useLinkHoverAnimation;