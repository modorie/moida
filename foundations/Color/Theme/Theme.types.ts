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
  | "lightest"
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

interface ThemeType {
  [category: string]: { [color: string]: string };
  bgColor: Record<bgColor, string>;
  selectColor: Record<selectColor, string>;
  badgeColor: Record<badgeColor, string>;
  borderColor: Record<borderColor, string>;
  textColor: Record<textColor, string>;
  helperBgColor: Record<helperBgColor, string>;
  helperBorderColor: Record<helperBorderColor, string>;
}

export default ThemeType;
