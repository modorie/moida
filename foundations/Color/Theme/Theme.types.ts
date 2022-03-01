export type bgColor =
  | "white"
  | "lighter"
  | "light"
  | "primary"
  | "badge";

export type selectBgColor =
  | "lighter"
  | "light"
  | "dark";

export type borderColor =
  | "lighter"
  | "light"
  | "primary"
  | "warning";

export type textColor =
  | "lightest"
  | "lighter"
  | "light"
  | "dark"
  | "darker"
  | "darkest"
  | "black"
  | "primary"
  | "warning";

interface ThemeType {
  [category: string]: { [color: string]: string };
  bgColor: Record<bgColor, string>;
  selectBgColor: Record<selectBgColor, string>;
  borderColor: Record<borderColor, string>;
  textColor: Record<textColor, string>;
}

export default ThemeType;
