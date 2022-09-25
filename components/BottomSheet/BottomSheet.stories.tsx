import { Meta, Story } from '@storybook/react'
import { useState } from 'react'
import styled from 'styled-components'

import { Button, Icon, Input, Portal, Text } from '@/components'

import BottomSheet from './BottomSheet'
import type { BottomSheetProps } from './BottomSheet.types'

export default {
  title: 'Components/BottomSheet',
  component: BottomSheet,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta

export const Default: Story<BottomSheetProps> = (args) => {
  const [isModalOpen, setIsModalOpen] = useState(true)
  const onClickClose = () => setIsModalOpen(false)

  return (
    <Portal id="bottom-sheet-portal">
      {isModalOpen && <BottomSheet {...args} onClickClose={onClickClose} />}
    </Portal>
  )
}

Default.args = {}

export const TermsExample: Story = () => {
  const [isModalOpen, setIsModalOpen] = useState(true)
  const onClickClose = () => setIsModalOpen(false)

  return (
    <Portal id="bottom-sheet-portal">
      {isModalOpen && (
        <BottomSheet onClickClose={onClickClose}>
          <Header>
            <Text size="sub3" weight="bold" as="h3">
              서비스 이용약관
            </Text>
            <IconBox onClick={onClickClose}>
              <Icon name="x" size={30} />
            </IconBox>
          </Header>
        </BottomSheet>
      )}
    </Portal>
  )
}

export const FormExample: Story = () => {
  const [isModalOpen, setIsModalOpen] = useState(true)
  const onClickClose = () => setIsModalOpen(false)

  return (
    <Portal id="bottom-sheet-portal">
      {isModalOpen && (
        <BottomSheet onClickClose={onClickClose}>
          <Container>
            <FormInner>
              <Input
                label="닉네임"
                description="모임에서 사용할 닉네임을 5자 이내로 입력해주세요."
                placeholder="오구오구"
              />
              <Text size="body2" weight="bold" color="gray600">
                계정이 이미 있으신가요? <Link href="#">로그인하기</Link>
              </Text>
            </FormInner>
            <Button>입력 완료</Button>
          </Container>
        </BottomSheet>
      )}
    </Portal>
  )
}

const Header = styled.div`
  position: relative;
  padding: 30px 26px 0;

  > h3 {
    padding-bottom: 12px;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray200};
  }
`

const IconBox = styled.button`
  position: absolute;
  top: 22px;
  right: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;
  border: none;
  background: none;

  cursor: pointer;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  height: 100%;
  padding: 40px 26px 31px;
`

const FormInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 18px;

  a {
    color: ${({ theme }) => theme.color.gray800};
    text-decoration: none;
  }
`

const Link = styled.a`
  color: ${({ theme }) => theme.color.gray800};
  text-decoration: none;
`
