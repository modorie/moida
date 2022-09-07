import TypoView from './Typography.styled'
import type TypoProps from './Typography.types'

const Typography = ({ weight, size, color, children }: TypoProps) => (
  <TypoView weight={weight} size={size} color={color}>
    {children}
  </TypoView>
)

export default Typography
