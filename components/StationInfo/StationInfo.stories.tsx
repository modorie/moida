import { Meta, Story } from '@storybook/react'
import styled from 'styled-components'

import stations from './assets/stations'
import StationInfo from './StationInfo'
import type StationType from './StationInfo.types'

export default {
  title: 'Components/StationInfo',
  component: StationInfo,
} as Meta

export const Default: Story<StationType> = (args) => <StationInfo {...args} />

Default.args = {
  name: '강남역',
}

Default.parameters = {
  layout: 'centered',
}

export const Examples = () => (
  <Layout>
    {Object.keys(stations).map((name) => (
      <StationInfo name={name} key={name} />
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
  gap: 20px;
  flex-wrap: wrap;
`
