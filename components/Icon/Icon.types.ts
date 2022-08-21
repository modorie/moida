import { IconName } from "./assets";
import type { ColorKey } from "@/foundations";

interface IconOptions {
  name: IconName;
  size?: number;
  color?: ColorKey;
}

export default interface IconProps extends IconOptions {}
