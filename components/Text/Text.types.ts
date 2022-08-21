import type {
  AsProps,
  ChildrenProps,
  StandardAttrProps,
} from "@/types/ComponentProps";
import type { FontSizeKey, FontWeightKey, ColorKey } from "@/foundations";

export interface TextProps extends AsProps, ChildrenProps, StandardAttrProps {
  align?:
    | "start"
    | "end"
    | "left"
    | "right"
    | "center"
    | "justify"
    | "match-parent"
    | "inherit";
  size?: FontSizeKey;
  weight?: FontWeightKey | "inherit";
  color?: ColorKey | "currentColor";
  whiteSpace?:
    | "normal"
    | "pre"
    | "nowrap"
    | "pre-wrap"
    | "pre-line"
    | "break-spaces"
    | "inherit";
  italic?: boolean;
  underline?: boolean;
  htmlFor?: string;
  userSelect?: "auto" | "text" | "none" | "contain" | "all";
  textOverflow?:
    | "clip"
    | "ellipsis"
    | "inherit"
    | "initial"
    | "revert"
    | "revert-layer"
    | "unset";
}
