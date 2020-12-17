import base from './base';
import colors from '../core/colors';
import { themes } from '@constants/index';

export default {
  ...base,
  name: themes.LIGHT,
  colors: {
    separator: {},
    border: {
      secondary: colors.white
    },
    bg: {
      primary: colors.gallery,
      secondary: colors.white,
      secondary30: colors.white30,
      tertiary: colors.black,
      tertiary30: colors.black30,
      like: colors.shamrock,
      dislike: colors.yellowOrange
    },
    font: {
      primary: colors.tundora,
      secondary: colors.white,
      brand: colors.shamrock
    }
  },
  boxShadows: {
    topHeroShadow: `0px 90px 90px ${colors.black60}`
  }
};
