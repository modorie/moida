type FontWeightKey =
  | "light"
  | "regular"
  | "medium"
  | "bold";

type FontWeightType = Record<FontWeightKey, number>;

export default FontWeightType;
