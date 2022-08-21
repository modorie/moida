import { ChildrenProps } from "@/types/ComponentProps";

interface TabOptions {
  active?: boolean;
  onClick?: React.MouseEventHandler;
}

export interface TabProps extends ChildrenProps, TabOptions {}
