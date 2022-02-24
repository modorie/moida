export type FontSizeKey =
  | "h1"
  | "h2"
  | "sub1"
  | "sub2"
  | "sub3"
  | "body1"
  | "body2"
  | "body3"
  | "cap1"
  | "cap2";

type FontSizeType = Record<FontSizeKey, number>;

export default FontSizeType;
