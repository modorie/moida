import type { StandardAttrProps } from '@/types/ComponentProps'
import type { FormProps } from '@/types/FormProps'

// prettier-ignore
type InputType =
  | "text"
  | "search"
  | "email"
  | "password"
  | "number";

export interface InputProps
  extends FormProps,
    StandardAttrProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  type?: InputType
  label?: string
  description?: string
  placeholder?: string
  clearable?: boolean
  hasError?: boolean
  errorMsg?: string
  rightContent?: React.ReactNode
}
