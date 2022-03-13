// prettier-ignore
export type bgColor =
  | "white"
  | "lighter"
  | "light"
  | "primary"

// prettier-ignore
export type selectColor =
  | "lighter"
  | "light"
  | "dark";

// prettier-ignore
export type borderColor =
  | "lighter"
  | "light"
  | "primary"
  | "warning";

export type textColor =
  | "white"
  | "lightest"
  | "lighter"
  | "light"
  | "dark"
  | "darker"
  | "darkest"
  | "black"
  | "primary"
  | "warning";

// prettier-ignore
export type badgeColor = 
  | "ongoing"
  | "closed";

// prettier-ignore
export type helperBgColor = 
  | "light"
  | "dark";

// prettier-ignore
export type helperBorderColor = 
  | "light"
  | "dark";

// prettier-ignore
export type ButtonBgColor = 
|  "primary" 
|  "secondary"

// prettier-ignore
export type ButtonTextColor = 
|  "primary" 
|  "secondary"

// prettier-ignore
export type ButtonBorderColor = 
|  "primary" 
|  "secondary"

// prettier-ignore
export type ButtonActiveBgColor = 
|  "primary" 
|  "secondary"

// prettier-ignore
export type ButtonActiveTextColor = 
|  "primary" 
|  "secondary"

// prettier-ignore
export type ButtonActiveBorderColor = 
|  "primary" 
|  "secondary"

// prettier-ignore
export type ButtonDisableBgColor = 
|  "primary" 
|  "secondary"

// prettier-ignore
export type ButtonDisableTextColor = 
|  "primary" 
|  "secondary"

// prettier-ignore
export type ButtonDisableBorderColor = 
|  "primary" 
|  "secondary"

interface ThemeType {
  [category: string]: { [color: string]: string };
  bgColor: Record<bgColor, string>;
  selectColor: Record<selectColor, string>;
  badgeColor: Record<badgeColor, string>;
  borderColor: Record<borderColor, string>;
  textColor: Record<textColor, string>;
  helperBgColor: Record<helperBgColor, string>;
  helperBorderColor: Record<helperBorderColor, string>;
  ButtonBgColor: Record<ButtonBgColor, string>;
  ButtonTextColor: Record<ButtonTextColor, string>;
  ButtonBorderColor: Record<ButtonBorderColor, string>;
  ButtonActiveBgColor: Record<ButtonActiveBgColor, string>;
  ButtonActiveTextColor: Record<ButtonActiveTextColor, string>;
  ButtonActiveBorderColor: Record<ButtonActiveBorderColor, string>;
  ButtonDisableBgColor: Record<ButtonDisableBgColor, string>;
  ButtonDisableTextColor: Record<ButtonDisableTextColor, string>;
  ButtonDisableBorderColor: Record<ButtonDisableBorderColor, string>;
}

export default ThemeType;
