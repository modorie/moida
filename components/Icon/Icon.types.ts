import { IconName } from "./assets";

interface IconOptions {
  name: IconName;
  width?: string;
  height?: string;
}

// 확장성 고려
export default interface IconProps extends IconOptions {}
