import type { ColorKey } from '@/foundations'
import { StandardAttrProps } from '@/types/ComponentProps'

import { IconName } from './assets'

export interface IconProps extends StandardAttrProps {
  name: IconName
  size?: number
  color?: ColorKey
}

export interface SvgProps extends Omit<IconProps, 'name'> {}

export interface StyledSvgProps
  extends Omit<React.SVGProps<SVGSVGElement>, 'color'> {
  color?: ColorKey
}
