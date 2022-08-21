export const TitleList = [
  "h1",
  "h2",
  "sub1",
  "sub2",
  "sub3",
] as const;

export const TextList = [
  "body1",
  "body2",
  "body3",
  "cap1",
  "cap2",
] as const;

export type TitleKey = typeof TitleList[number];

export type TextKey = typeof TextList[number];

export type FontSizeKey =
  | TitleKey
  | TextKey;

export type FontSizeType = Record<FontSizeKey, number>;

