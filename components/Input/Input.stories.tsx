import React from "react";
import styled from "styled-components";
import { Story, Meta } from "@storybook/react";

import Input from "./Input";
import { Typography } from "@/components";

import type { InputProps } from "./Input.types";

export default {
  title: "Components/Input",
  component: Input,
} as Meta;

export const Default: Story<InputProps> = (args) => <Input {...args} />;

Default.args = {
  disabled: false,
  hasError: false,
  required: true,
  readonly: false,
  type: "text",
  label: "",
  errorMsg: "",
  description: "",
  control: "clear",
};

export const Examples = () => (
  <Layout>
    <Typography size="sub1" weight="bold">
      Input Controls
    </Typography>
    <Input />
    <Input control="manage" />
    <Input control="search" />

    <br />

    <Typography size="sub1" weight="bold">
      타이틀이 없는 경우
    </Typography>
    <Input />
    <Input disabled />
    <Input hasError errorMsg="입력오류문구 영역" />

    <br />

    <Typography size="sub1" weight="bold">
      타이틀이 있는 경우
    </Typography>
    <Input label="타이틀" />
    <Input label="타이틀" disabled />
    <Input label="타이틀" hasError errorMsg="입력오류문구 영역" />

    <br />

    <Typography size="sub1" weight="bold">
      설명문구가 있는 경우
    </Typography>
    <Input label="타이틀" description="설명문구" />
    <Input label="타이틀" description="설명문구" disabled />
    <Input
      label="타이틀"
      description="설명문구"
      hasError
      errorMsg="입력오류문구 영역"
    />

    <br />

    <Typography size="sub1" weight="bold">
      선택사항인 경우
    </Typography>
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
);

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
