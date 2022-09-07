import React from 'react'

import LoadingDots from '../LoadingDots'
import { Layout } from './Button.styled'
import type { ButtonProps } from './Button.types'

const Button = ({
  styleVariant = 'primary',
  disabled,
  loading = false,
  children,
}: ButtonProps) => {
  return (
    <Layout
      size="sub2"
      styleVariant={styleVariant}
      disabled={disabled}
      loading={loading}
    >
      {loading ? <LoadingDots /> : children}
    </Layout>
  )
}

export default Button
