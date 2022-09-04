import type { RadioProps } from './Radio/Radio.types'

interface ButtonGroupOptions {
  label?: string
  name: string
  options: RadioProps[]
}

export interface ButtonGroupProps extends ButtonGroupOptions {}
