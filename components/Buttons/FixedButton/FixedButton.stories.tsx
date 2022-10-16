import { Meta, Story } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import { Text } from '@/components'

import FixedButton from './FixedButton'
import type { FixedButtonProps } from './FixedButton.types'

export default {
  title: 'Components/Buttons/FixedButton',
  component: FixedButton,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Default: Story<FixedButtonProps> = (args) => (
  <FixedButton {...args} />
)

Default.args = {
  children: 'text',
  styleVariant: 'primary',
  disabled: false,
  loading: false,
}

export const Examples = () => (
  <Layout>
    <Text size="sub1" weight="bold">
      Primary
    </Text>

    <FixedButton>text</FixedButton>
    <FixedButton disabled>text</FixedButton>
    <FixedButton loading>text</FixedButton>

    <br />

    <Text size="sub1" weight="bold">
      Secondary
    </Text>

    <FixedButton styleVariant="secondary">text</FixedButton>
    <FixedButton styleVariant="secondary" disabled>
      text
    </FixedButton>
    <FixedButton styleVariant="secondary" loading>
      text
    </FixedButton>
  </Layout>
)

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  button {
    position: relative;
  }
`
