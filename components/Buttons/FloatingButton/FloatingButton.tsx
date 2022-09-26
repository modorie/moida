import React from 'react'

import { Icon } from '@/components'

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
    <Layout
      size="body2"
      weight="bold"
      color="black"
      disabled={disabled}
      id={id}
      className={className}
      style={style}
    >
      <Icon name="edit" size={23} color="black" />
      {children}
    </Layout>
  )
}

export default FloatingButton
