import {
  indigoDark,
  grassDark,
  orangeDark,
  sandDark,

} from '@radix-ui/colors';

import breakpoints from './breakpoints';



const theme = {
  colors: {
    ...indigoDark,
    ...sandDark,
    ...grassDark,
    ...orangeDark,
  },
  breakpoints: breakpoints,
};

export default theme;
