import { Palette } from "@/foundations";
import type ThemeType from "./Theme.types";

const Theme: ThemeType = {
  bgColor: {
    white: Palette.white,
    lighter: Palette.gray100,
    light: Palette.gray200,
    primary: Palette.blue100,
  },

  selectBgColor: {
    lighter: Palette.green50,
    light: Palette.green100,
    dark: Palette.green200,
  },

  badgeColor: {
    ongoing: Palette.coral200,
    closed: Palette.gray400,
  },

  borderColor: {
    lighter: Palette.gray200,
    light: Palette.gray300,
    primary: Palette.blue100,
    warning: Palette.coral100,
  },

  textColor: {
    lightest: Palette.gray400,
    lighter: Palette.gray500,
    light: Palette.gray600,
    dark: Palette.gray700,
    darker: Palette.gray800,
    darkest: Palette.gray900,
    black: Palette.black,
    primary: Palette.blue100,
    warning: Palette.coral100,
  },
};

export default Theme;
