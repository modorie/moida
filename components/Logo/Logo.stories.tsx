import styled from 'styled-components'
import { Story, Meta } from '@storybook/react'

import Logo from './Logo'
import { Text } from '@/components'

import type LogoProps from './Logo.types'

export default {
  title: 'Components/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
} as Meta

export const Default: Story<LogoProps> = (args) => <Logo {...args} />

Default.args = {
  height: 40,
  wordmark: true,
  symbol: false,
}

Default.argTypes = {
  height: { control: { type: 'range', min: 10, max: 70, step: 10 } },
}

export const Examples = () => (
  <Layout>
    <Text size="sub1" weight="bold">
      워드마크만 있는 경우
    </Text>
    <Logo height={21} />
    <Logo height={42} />
    <Logo height={63} />
    <br />
    <Text size="sub1" weight="bold">
      심볼만 있는 경우
    </Text>
    <Logo symbol wordmark={false} height={21} />
    <Logo symbol wordmark={false} height={42} />
    <Logo symbol wordmark={false} height={63} />
    <br />
    <Text size="sub1" weight="bold">
      모두 있는 경우
    </Text>
    <Logo symbol height={21} />
    <Logo symbol height={42} />
    <Logo symbol height={63} />
  </Layout>
)

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
