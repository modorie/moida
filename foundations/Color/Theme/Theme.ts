import { Palette } from "@/foundations";
import type ThemeType from "./Theme.types";

const Theme: ThemeType = {
  bgColor: {
    white: Palette.white,
    lighter: Palette.gray100,
    light: Palette.gray200,
    primary: Palette.blue100,
  },

  selectColor: {
    lighter: Palette.green50,
    light: Palette.green100,
    dark: Palette.green200,
  },

  borderColor: {
    lightest: Palette.gray100,
    lighter: Palette.gray200,
    light: Palette.gray300,
    primary: Palette.blue100,
    active: Palette.blue200,
    warning: Palette.coral100,
  },

  textColor: {
    white: Palette.white,
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

  badgeColor: {
    ongoing: Palette.coral200,
    closed: Palette.gray400,
  },

  helperBgColor: {
    light: Palette.blue100,
    dark: Palette.blue400,
  },

  helperBorderColor: {
    light: Palette.blue200,
    dark: Palette.blue500,
  },

  ButtonBgColor: {
    primary: Palette.blue100,
    secondary: Palette.white,
  },

  ButtonTextColor: {
    primary: Palette.white,
    secondary: Palette.blue100,
  },

  ButtonActiveBgColor: {
    primary: Palette.blue200,
    secondary: Palette.white,
  },

  ButtonActiveTextColor: {
    primary: Palette.white,
    secondary: Palette.blue200,
  },

  ButtonDisableBgColor: {
    primary: Palette.gray200,
    secondary: Palette.white,
  },

  ButtonDisableBorderColor: {
    primary: Palette.gray200,
    secondary: Palette.gray300,
  },
};

export default Theme;
