import React from 'react'

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
      size="sub2"
      styleVariant={styleVariant}
      disabled={disabled}
      loading={loading}
      id={id}
      className={className}
      style={style}
    >
      {loading ? <LoadingDots /> : children}
    </Layout>
  )
}

export default Button
