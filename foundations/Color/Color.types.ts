enum BaseColorKey {
  // grayscale
  White = "white",
  Gray = "gray",
  Black = "black",

  // colorful
  Blue = "blue",
  Green = "green",
  Coral = "coral",
}

type GrayColorRange = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
type BlueColorRange = 100 | 200 | 300 | 400 | 500 | 600 | 700;
type GreenColorRange = 100 | 200 | 300;
type CoralColorRange = 100 | 200;

type GrayColorKey = `${BaseColorKey.Gray}${GrayColorRange}`;

type ColorfulColorKey =
  | `${BaseColorKey.Blue}${BlueColorRange}`
  | `${BaseColorKey.Green}${GreenColorRange}`
  | `${BaseColorKey.Coral}${CoralColorRange}`

export type ColorKey =
  | ColorfulColorKey
  | GrayColorKey
  | BaseColorKey.White
  | BaseColorKey.Black;

export type ColorType = Record<ColorKey, string>;

