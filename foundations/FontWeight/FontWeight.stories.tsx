import { Meta } from '@storybook/react'
import styled from 'styled-components'

import FontWeight, { fontWeightList } from './FontWeight'
import { FontWeightKey } from './FontWeight.types'

export default {
  title: 'Foundations/Font Weight',
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
    },
  },
} as Meta

interface FontWeightProps {
  weight: FontWeightKey
}

export const FontWeightTemplate = () =>
  fontWeightList.map((fontWeightKey) => (
    <Layout weight={fontWeightKey} key={fontWeightKey}>
      <Name>{fontWeightKey}</Name>
      <Number>{FontWeight[fontWeightKey]}</Number>
      <Text>약속은 간편하게 모임은 한방에</Text>
    </Layout>
  ))

FontWeightTemplate.storyName = 'Font Weight'

const Layout = styled.div<FontWeightProps>`
  display: flex;
  align-items: center;
  font-weight: ${({ weight, theme }) => theme.fontWeight[weight]};
  font-size: ${({ theme }) => theme.fontSize.h1}px;
`

const Name = styled.p`
  width: 150px;
  text-transform: capitalize;
  margin: 1em 0;
`

const Number = styled.p`
  width: 100px;
  text-transform: capitalize;
  margin: 1em 0;
`

const Text = styled.p`
  margin: 1em 0;
`
