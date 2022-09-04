import { Meta, Story } from '@storybook/react'
import styled from 'styled-components'

import { Text } from '@/components'

import Input from './Input'
import type { InputProps } from './Input.types'

export default {
  title: 'Components/Input',
  component: Input,
} as Meta

const Template: Story<InputProps> = (args) => <Input {...args} />

export const Default = Template.bind({})

Default.args = {
  disabled: false,
  hasError: false,
  required: true,
  readonly: false,
  type: 'text',
  label: '',
  errorMsg: '',
  description: '',
  control: 'clear',
}

export const Examples = () => (
  <Layout>
    <Text size="sub1" weight="bold">
      Input Controls
    </Text>
    <Input />
    <Input control="manage" />
    <Input control="search" />

    <br />

    <Text size="sub1" weight="bold">
      타이틀이 없는 경우
    </Text>
    <Input />
    <Input disabled />
    <Input hasError errorMsg="입력오류문구 영역" />

    <br />

    <Text size="sub1" weight="bold">
      타이틀이 있는 경우
    </Text>
    <Input label="타이틀" />
    <Input label="타이틀" disabled />
    <Input label="타이틀" hasError errorMsg="입력오류문구 영역" />

    <br />

    <Text size="sub1" weight="bold">
      설명문구가 있는 경우
    </Text>
    <Input label="타이틀" description="설명문구" />
    <Input label="타이틀" description="설명문구" disabled />
    <Input
      label="타이틀"
      description="설명문구"
      hasError
      errorMsg="입력오류문구 영역"
    />

    <br />

    <Text size="sub1" weight="bold">
      선택사항인 경우
    </Text>
    <Input label="타이틀" description="설명문구" required={false} />
    <Input label="타이틀" description="설명문구" required={false} disabled />
    <Input
      label="타이틀"
      description="설명문구"
      required={false}
      hasError
      errorMsg="입력오류문구 영역"
    />
  </Layout>
)

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
