type bgColor =
  | "white"
  | "lighter"
  | "light"
  | "primary"
  | "badge";

type selectBgColor =
  | "lighter"
  | "light"
  | "dark";

type borderColor =
  | "lighter"
  | "light"
  | "primary"
  | "warning";

type textColor =
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
  bgColor: Record<bgColor, string>;
  selectBgColor: Record<selectBgColor, string>;
  borderColor: Record<borderColor, string>;
  textColor: Record<textColor, string>;
}

export default ThemeType;
