export type AvatarColorName =
  | "pink"
  | "red"
  | "orange"
  | "lemon"
  | "yellow"
  | "lightgreen"
  | "green"
  | "blue"
  | "purple"
  | "gray";

// Avatar.types.ts 파일의 EmojiObj와 함께 any 타입 핸들링 필요
type AvatarColorType = Record<AvatarColorName, string> | any;

export default AvatarColorType;
