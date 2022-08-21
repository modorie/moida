import { AvatarColorName } from "./AvatarColor/AvatarColor.types";

const PinkEmoji = ["🌷", "🌸", "🍣", "🐷", "🐹", "🍑"] as const;
const RedEmoji = ["🍉", "🍄", "🍎", "🍓", "🍫"] as const;
const OrangeEmoji = ["🍩", "🐶", "🐻", "🍞", "🍪"] as const;
const LemonEmoji = ["🍋", "🌼", "🌝", "🐥", "🍺", "🍌", "🍠"] as const;
const YellowEmoji = ["🍟", "🐱", "🐯", "🍤", "🍔", "🌮"] as const;
const LightGreenEmoji = ["🥑", "🍏", "🥝"] as const;
const GreenEmoji = ["🐢", "🍀", "🐠"] as const;
const BlueEmoji = ["👻", "🐼", "🌎"] as const;
const PurpleEmoji = ["🦄", "💖", "🔮", "☂", "🍇"] as const;
const GrayEmoji = ["⚽", "🗿", "🐧", "🎲", "🍙"] as const;

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

export const EmojiObj = Object.entries(EmojiList)
  .map(([key, value]) =>
    Object.fromEntries(value.map((k) => [k, key as AvatarColorName])),
  )
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
