import { IconName } from "./assets";
import type { textColor } from "@/foundations/Color/Theme/Theme.types";

interface IconOptions {
  name: IconName;
  width?: string;
  height?: string;
  color?: textColor;
}

// 확장성 고려
export default interface IconProps extends IconOptions {}
