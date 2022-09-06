import { useState } from 'react'
import styled, { css } from 'styled-components'
import { Meta } from '@storybook/react'

import { Text } from '@/components'

import type { KeyframeKey } from './Keyframe.types'

export default {
  title: 'Foundations/Keyframe',
  parameters: {
    layout: 'centered',
    viewport: {
      defaultViewport: 'responsive',
    },
  },
} as Meta

interface BoxProps {
  keyframe: KeyframeKey
}

export const KeyframeTemplate = () => {
  const [keyframe, setKeyframe] = useState<KeyframeKey | undefined>(
    'slideInLeft'
  )

  const onClick = (value: KeyframeKey | undefined) => {
    setKeyframe(undefined)
    setTimeout(() => setKeyframe(value), 100)
  }

  return (
    <Layout>
      <BoxRange>{keyframe && <TransitionBox keyframe={keyframe} />}</BoxRange>
      <ButtonBox>
        <Button onClick={() => onClick('slideInLeft')}>
          <Text weight="bold">slideInLeft</Text>
        </Button>
        <Button onClick={() => onClick('slideInUp')}>
          <Text weight="bold">slideInUp</Text>
        </Button>
      </ButtonBox>
    </Layout>
  )
}

KeyframeTemplate.storyName = 'Keyframe'

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`

const BoxRange = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 400px;
  height: 400px;
  border: 1px solid ${({ theme }) => theme.color.gray300};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.gray100};

  overflow: hidden;
`

const TransitionBox = styled.div<BoxProps>`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.blue200};
  animation: ${({ keyframe, theme }) =>
    css`
      ${theme.keyframe[keyframe]} ${theme.transition}
    `};
`

const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
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
