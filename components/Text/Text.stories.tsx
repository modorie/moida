import styled from 'styled-components'
import { Story, Meta } from '@storybook/react'

import { FontSize, fontSizeList, fontWeightList } from '@/foundations'
import { colorList } from '@/foundations/Color/Color'

import Text from './Text'
import type { TextProps } from './Text.types'

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    as: {
      control: {
        type: 'select',
      },
      options: ['span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'p'],
    },
    size: {
      control: {
        type: 'select',
      },
      options: fontSizeList,
    },
    weight: {
      control: {
        type: 'select',
      },
      options: fontWeightList,
    },
    color: {
      control: {
        type: 'select',
      },
      options: colorList,
    },
  },
} as Meta

const Template: Story<TextProps> = (args) => <Text {...args} />

export const Default = Template.bind({})

Default.args = {
  children: '약속은 간편하게 모임은 한방에',
  size: 'body2',
  weight: 'regular',
  color: 'black',
}

Default.parameters = {
  layout: 'centered',
}

export const Examples = () =>
  fontSizeList.map((size) =>
    fontWeightList.map((weight) => (
      <Layout key={weight}>
        <Info>
          <Text size={size} weight={weight}>
            {size}
          </Text>
        </Info>
        <Weight>
          <Text size={size} weight={weight}>
            {weight}
          </Text>
        </Weight>
        <Info>
          <Text size={size} weight={weight}>
            {FontSize[size]}
          </Text>
        </Info>
        <Text size={size} weight={weight}>
          약속은 간편하게 모임은 한방에
        </Text>
      </Layout>
    ))
  )

Examples.parameters = {
  viewport: {
    defaultViewport: 'responsive',
  },
}

const Layout = styled.div`
  display: flex;
  align-items: center;
`

const Info = styled.p`
  width: 100px;
  text-transform: capitalize;
  margin: 1em 0;
`

const Weight = styled.p`
  width: 150px;
  text-transform: capitalize;
  margin: 1em 0;
`
