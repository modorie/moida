import { StandardAttrProps } from '@/types/ComponentProps'

import type { RadioProps } from './Radio/Radio.types'

export interface ButtonGroupProps extends StandardAttrProps {
  label?: string
  name: string
  options: RadioProps[]
}
