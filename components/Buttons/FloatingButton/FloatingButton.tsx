import { Icon, Text } from '@/components'

import { Layout } from './FloatingButton.styled'
import type { FloatingButtonProps } from './FloatingButton.types'

const FloatingButton = ({
  disabled,
  children,
  id,
  className,
  style,
}: FloatingButtonProps) => {
  return (
    <Layout disabled={disabled} id={id} className={className} style={style}>
      <Icon name="edit" size={23} color="currentColor" />
      <Text size="body2" weight="bold" color="currentColor" userSelect="none">
        {children}
      </Text>
    </Layout>
  )
}

export default FloatingButton
