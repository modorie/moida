import { ColorType, ColorKey } from "./Color.types";

const Color: ColorType = {
  // Blue
  blue100: "#E7F8FF",
  blue200: "#34B6EA",
  blue300: "#1DB1EC",
  blue400: "#00A4E5",
  blue500: "#1786FF",
  blue600: "#104270",
  blue700: "#00305B",

  // Green
  green100: "#DBFAB5",
  green200: "#A0F435",
  green300: "#9BE400",

  // Coral
  coral100: "#EE7F7B",
  coral200: "#FA6C67",

  // White
  white: "#FFFFFF",

  // Gray
  gray100: "#F6F6F6",
  gray200: "#EEEEEE",
  gray300: "#DDDDDD",
  gray400: "#CCCCCC",
  gray500: "#AAAAAA",
  gray600: "#999999",
  gray700: "#666666",
  gray800: "#444444",
  gray900: "#333333",

  // Black
  black: "#000000",
};

export const colorList: ColorKey[] = Object.keys(Color) as ColorKey[];

export default Color;
