import { Text } from '@/components'

import { Arrow, ArrowBox, Layout } from './HelperText.styled'
import type HelperProps from './HelperText.types'

const HelperText = ({
  children,
  color = 'light',
  id,
  className,
  style,
}: HelperProps) => (
  <Layout color={color} id={id} className={className} style={style}>
    <Text size="body3" weight="bold" color="white" whiteSpace="nowrap">
      {children}
    </Text>
    <ArrowBox>
      <Arrow color={color} />
    </ArrowBox>
  </Layout>
)

export default HelperText
