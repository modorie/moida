import { Meta, Story } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import { Text } from '@/components'

import Button from './Button'
import type { ButtonProps } from './Button.types'

export default {
  title: 'Components/Buttons/Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'text',
  styleVariant: 'primary',
  disabled: false,
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'text',
  styleVariant: 'secondary',
  disabled: false,
}

export const Examples = () => (
  <Layout>
    <Text size="sub1" weight="bold">
      Primary
    </Text>

    <Button>text</Button>
    <Button disabled>text</Button>
    <Button loading>text</Button>

    <br />

    <Text size="sub1" weight="bold">
      Secondary
    </Text>

    <Button styleVariant="secondary">text</Button>
    <Button styleVariant="secondary" disabled>
      text
    </Button>
    <Button styleVariant="secondary" loading>
      text
    </Button>
  </Layout>
)

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
