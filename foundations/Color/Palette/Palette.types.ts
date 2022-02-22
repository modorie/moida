enum BasePaletteKey {
  // grayscale
  White = "white",
  Gray = "gray",
  Black = "black",

  // colorful
  Blue = "blue",
  Green = "green",
  Coral = "coral",
}

type GrayPaletteKey =
  | `${BasePaletteKey.Gray}100`
  | `${BasePaletteKey.Gray}200`
  | `${BasePaletteKey.Gray}300`
  | `${BasePaletteKey.Gray}400`
  | `${BasePaletteKey.Gray}500`
  | `${BasePaletteKey.Gray}600`
  | `${BasePaletteKey.Gray}700`
  | `${BasePaletteKey.Gray}800`
  | `${BasePaletteKey.Gray}900`;

type ColorfulPaletteKey =
  | `${BasePaletteKey.Blue}50`
  | `${BasePaletteKey.Blue}100`
  | `${BasePaletteKey.Blue}200`
  | `${BasePaletteKey.Blue}300`
  | `${BasePaletteKey.Blue}400`
  | `${BasePaletteKey.Green}50`
  | `${BasePaletteKey.Green}100`
  | `${BasePaletteKey.Green}200`
  | `${BasePaletteKey.Coral}100`
  | `${BasePaletteKey.Coral}200`;

type PaletteKey =
  | ColorfulPaletteKey
  | GrayPaletteKey
  | BasePaletteKey.White
  | BasePaletteKey.Black;

type PaletteType = Record<PaletteKey, string>;

export default PaletteType;
