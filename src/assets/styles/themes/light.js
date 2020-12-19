import base from './base';
import colors from '../core/colors';
import { themes } from '@constants/index';

export default {
  ...base,
  name: themes.LIGHT,
  colors: {
    separator: {
      primary: colors.black80
    },
    border: {
      primary: colors.black,
      secondary: colors.white
    },
    bg: {
      primary: colors.gallery,
      secondary: colors.white,
      secondary30: colors.white30,
      secondary80: colors.white80,
      tertiary: colors.black,
      tertiary30: colors.black30,
      tertiary80: colors.black80,
      like: colors.shamrock,
      like70: colors.shamrock70,
      like90: colors.shamrock90,
      dislike: colors.yellowOrange,
      dislike70: colors.yellowOrange70,
      dislike90: colors.yellowOrange90
    },
    font: {
      primary: colors.tundora,
      secondary: colors.white,
      tertiary: colors.black,
      brand: colors.shamrock
    }
  },
  boxShadows: {
    topHeroShadow: `0px 90px 90px ${colors.black60}`
  }
};
