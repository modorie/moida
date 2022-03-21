import { ChildrenProps } from "@/types/ComponentProps";

interface CheckBoxOptions {
  checked: boolean;
  hasError?: boolean;
  errorMsg?: string;
}
export interface CheckBoxProps extends ChildrenProps, CheckBoxOptions {}
