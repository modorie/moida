const PinkEmoji = ["๐ท", "๐ธ", "๐ฃ", "๐ท", "๐น", "๐"] as const;
const RedEmoji = ["๐", "๐", "๐", "๐", "๐ซ"] as const;
const OrangeEmoji = ["๐ฉ", "๐ถ", "๐ป", "๐", "๐ช"] as const;
const LemonEmoji = ["๐", "๐ผ", "๐", "๐ฅ", "๐บ", "๐", "๐ "] as const;
const YellowEmoji = ["๐", "๐ฑ", "๐ฏ", "๐ค", "๐", "๐ฎ"] as const;
const LightGreenEmoji = ["๐ฅ", "๐", "๐ฅ"] as const;
const GreenEmoji = ["๐ข", "๐", "๐ "] as const;
const BlueEmoji = ["๐ป", "๐ผ", "๐"] as const;
const PurpleEmoji = ["๐ฆ", "๐", "๐ฎ", "โ", "๐"] as const;
const GrayEmoji = ["โฝ", "๐ฟ", "๐ง", "๐ฒ", "๐"] as const;

export const EmojiList = {
  pink: PinkEmoji,
  red: RedEmoji,
  orange: OrangeEmoji,
  lemon: LemonEmoji,
  yellow: YellowEmoji,
  lightgreen: LightGreenEmoji,
  green: GreenEmoji,
  blue: BlueEmoji,
  purple: PurpleEmoji,
  gray: GrayEmoji,
};

// AvatarColor.types.ts ํ์ผ์ AvatarColorType์ ํจ๊ป any ํ์ ํธ๋ค๋ง ํ์
export const EmojiObj: any = Object.entries(EmojiList)
  .map(([key, value]) => Object.fromEntries(value.map((k) => [k, key])))
  .reduce((prev, curr) => Object.assign(prev, curr));

type PinkEmojiKey = typeof PinkEmoji[number];
type RedEmojiKey = typeof RedEmoji[number];
type OrangeEmojiKey = typeof OrangeEmoji[number];
type LemonEmojiKey = typeof LemonEmoji[number];
type YellowEmojiKey = typeof YellowEmoji[number];
type LightGreenEmojiKey = typeof LightGreenEmoji[number];
type GreenEmojiKey = typeof GreenEmoji[number];
type BlueEmojiKey = typeof BlueEmoji[number];
type PurpleEmojiKey = typeof PurpleEmoji[number];
type GrayEmojiKey = typeof GrayEmoji[number];

export type EmojiKey =
  | PinkEmojiKey
  | RedEmojiKey
  | OrangeEmojiKey
  | LemonEmojiKey
  | YellowEmojiKey
  | LightGreenEmojiKey
  | GreenEmojiKey
  | BlueEmojiKey
  | PurpleEmojiKey
  | GrayEmojiKey;

interface AvatarOptions {
  emoji: EmojiKey;
  isHost?: boolean;
}

export default interface AvatarProps extends AvatarOptions {}
