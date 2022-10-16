import { Text } from '@/components'

import LoadingDots from '../LoadingDots'
import { Layout } from './FixedButton.styled'
import type { FixedButtonProps } from './FixedButton.types'

const FixedButton = ({
  styleVariant = 'primary',
  disabled,
  loading = false,
  children,
  id,
  className,
  style,
}: FixedButtonProps) => {
  return (
    <Layout
      styleVariant={styleVariant}
      disabled={disabled}
      loading={loading}
      id={id}
      className={className}
      style={style}
    >
      {loading ? (
        <LoadingDots color="currentColor" />
      ) : (
        <Text
          size="sub2"
          weight={styleVariant === 'primary' ? 'bold' : 'regular'}
          color="currentColor"
        >
          {children}
        </Text>
      )}
    </Layout>
  )
}

export default FixedButton
