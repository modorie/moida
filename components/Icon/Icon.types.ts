import { IconName } from "./assets";
import type { textColor } from "@/foundations/Color/Theme";

interface IconOptions {
  name: IconName;
  size?: number;
  color?: textColor;
}

// 확장성 고려
export default interface IconProps extends IconOptions {}
