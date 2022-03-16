import type {
  ChildrenProps,
  DisableProps,
  LoadingProps,
} from "@/types/ComponentProps";

type StyleType = "primary" | "secondary";

interface ButtonOptions {
  styleVariant?: StyleType;
}

// prettier-ignore
export interface ButtonProps extends ChildrenProps, DisableProps, LoadingProps, ButtonOptions {}
