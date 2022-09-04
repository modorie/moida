import { ChildrenProps } from '@/types/ComponentProps'

import type { FontSizeKey } from '@/foundations/FontSize'
import type { FontWeightKey } from '@/foundations/FontWeight'
import type { textColor } from '@/foundations/Color/Theme'

interface TypoOptions {
  size?: FontSizeKey
  weight?: FontWeightKey
  color?: textColor
}

export default interface TypoProps extends ChildrenProps, TypoOptions {}
