import { ChildrenProps } from "@/types/ComponentProps";

interface HelperOptions {
  color: "dark" | "light";
}

export default interface HelperProps extends ChildrenProps, HelperOptions {}
