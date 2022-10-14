import { Text } from '@/components'

import LoadingDots from '../LoadingDots'
import { Layout } from './Button.styled'
import type { ButtonProps } from './Button.types'

const Button = ({
  styleVariant = 'primary',
  disabled,
  loading = false,
  children,
  id,
  className,
  style,
}: ButtonProps) => {
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
          userSelect="none"
        >
          {children}
        </Text>
      )}
    </Layout>
  )
}

export default Button
