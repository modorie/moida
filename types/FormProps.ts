import type { DisableProps } from './ComponentProps'

interface FormOptions {
  hasError?: boolean
  required?: boolean
  readonly?: boolean
  disabled?: boolean
}

export interface FormProps extends DisableProps, FormOptions {}
