import { Meta } from '@storybook/react'
import { useState } from 'react'
import styled from 'styled-components'

import { Text } from '@/components'

export default {
  title: 'Foundations/Transition',
  parameters: {
    layout: 'centered',
    viewport: {
      defaultViewport: 'responsive',
    },
  },
} as Meta

interface BoxProps {
  isClicked: boolean
}

export const TransitionTemplate = () => {
  const [isClicked, setIsClicked] = useState(false)
  const onClick = () => setIsClicked(!isClicked)

  return (
    <Layout>
      <TransitionBox isClicked={isClicked} />
      <Button onClick={onClick}>
        <Text weight="bold">Click Me</Text>
      </Button>
    </Layout>
  )
}

TransitionTemplate.storyName = 'Transition'

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

const TransitionBox = styled.div<BoxProps>`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  background-color: ${({ isClicked, theme }) =>
    isClicked ? theme.color.gray200 : theme.color.blue200};
  transition: ${({ theme }) => theme.transition};
`

// TODO : 버튼 컴포넌트 완성 시 교체
const Button = styled.button`
  width: 100px;
  height: 42px;
  border-radius: 42px;
  border: 1px solid ${({ theme }) => theme.color.blue200};
  box-shadow: 0 0 10px rgb(0 0 0 / 0.1);

  background-color: ${({ theme }) => theme.color.white};
  cursor: pointer;

  :active {
    transform: scale(0.95);
    box-shadow: 0 0 5px rgb(0 0 0 / 0.05);
  }
`
