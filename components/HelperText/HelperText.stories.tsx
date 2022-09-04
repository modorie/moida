import styled from 'styled-components'
import { Story, Meta } from '@storybook/react'

import HelperText from './HelperText'

import type HelperProps from './HelperText.types'

export default {
  title: 'Components/HelperText',
  component: HelperText,
  parameters: {
    layout: 'centered',
  },
} as Meta

export const Default: Story<HelperProps> = (args) => <HelperText {...args} />

Default.args = {
  children: '텍스트',
  color: 'light',
}

export const Examples = () => (
  <Layout>
    <HelperText color="light">하람</HelperText>
    <HelperText color="dark">중간장소</HelperText>
  </Layout>
)

const Layout = styled.div`
  display: flex;
  gap: 10px;
`
