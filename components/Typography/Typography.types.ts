import { ChildrenProps } from "@/types/ComponentProps";

import type { FontSizeKey } from "@/foundations/FontSize/FontSize.types";
import type { FontWeightKey } from "@/foundations/FontWeight/FontWeight.types";
import type { textColor } from "@/foundations/Color/Theme/Theme.types";

interface TypoOptions {
  size?: FontSizeKey;
  weight?: FontWeightKey;
  color?: textColor;
}

export default interface TypoProps extends ChildrenProps, TypoOptions {}
