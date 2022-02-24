import { ChildrenProps } from "@/types/ComponentProps";
import { FontSizeKey } from "@/foundations/FontSize/FontSize.types";
import { FontWeightKey } from "@/foundations/FontWeight/FontWeight.types";
import { textColor } from "@/foundations/Color/Theme/Theme.types";

interface TypoOptions {
  size?: FontSizeKey;
  weight?: FontWeightKey;
  color?: textColor;
}

export default interface TypoProps extends ChildrenProps, TypoOptions {}
