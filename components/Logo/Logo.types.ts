import type { StandardAttrProps } from '@/types/ComponentProps'

export default interface LogoProps extends StandardAttrProps {
  symbol?: boolean
  wordmark?: boolean
  height?: number
}
