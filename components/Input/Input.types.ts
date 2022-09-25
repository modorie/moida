import type { StandardAttrProps } from '@/types/ComponentProps'
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

export interface InputProps extends FormProps, StandardAttrProps {
  type?: InputType
  label?: string
  errorMsg?: string
  description?: string
  control?: ControlType
  placeholder?: string
}
