import type { FormProps } from "@/types/FormProps";

type InputType =
  | "text"
  | "search"
  | "email"
  | "password"
  | "number";

interface InputOptions {
  type?: InputType;
  label?: string;
  errorMsg?: string;
  description?: string;
}

export interface InputProps extends FormProps, InputOptions {}
