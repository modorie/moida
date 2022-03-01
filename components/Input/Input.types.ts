import type { FormProps } from "@/types/FormProps";

type InputType =
  | "text"
  | "search"
  | "email"
  | "password"
  | "number";

export type ControlType =
  | "clear"
  | "manage"
  | "search";

interface InputOptions {
  type?: InputType;
  label?: string;
  errorMsg?: string;
  description?: string;
  control?: ControlType;
}

// prettier-ignore
export interface InputProps extends FormProps, InputOptions {}
