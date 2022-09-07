import { Meta, Story } from '@storybook/react'
import styled from 'styled-components'

import { Text } from '@/components'

import { iconList } from './assets'
import Icon from './Icon'
import type { IconProps } from './Icon.types'

export default {
  title: 'Components/Icon',
  component: Icon,
} as Meta

export const Default: Story<IconProps> = (args) => <Icon {...args} />

Default.args = {
  name: 'edit',
  size: 30,
  color: 'gray900',
}

Default.argTypes = {
  size: { control: { type: 'range', min: 30, max: 100, step: 10 } },
}

Default.parameters = {
  layout: 'centered',
}

export const Examples = () => (
  <Layout>
    {iconList.map((icon) => (
      <IconChip key={icon}>
        <Icon name={icon} />
        <Text size="cap1">{icon}</Text>
      </IconChip>
    ))}
  </Layout>
)

Examples.parameters = {
  viewport: {
    defaultViewport: 'responsive',
  },
}

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const IconChip = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  width: 100px;
  height: 100px;
`
