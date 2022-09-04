import type { FormProps } from '@/types/FormProps'

// prettier-ignore
type InputType =
  | "text"
  | "search"
  | "email"
  | "password"
  | "number";

// prettier-ignore
export type ControlType =
  | "clear"
  | "manage"
  | "search";

interface InputOptions {
  type?: InputType
  label?: string
  errorMsg?: string
  description?: string
  control?: ControlType
  placeholder?: string
}

export interface InputProps extends FormProps, InputOptions {}
