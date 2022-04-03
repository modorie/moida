import React from "react";
import { Story, Meta } from "@storybook/react";
import styled from "styled-components";

import { Typography, Input, ButtonGroup, FixedButton } from "@/components";

export default {
  title: "Components/Form",
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

export const Default: Story = () => (
  <>
    <Layout>
      <Typography size="h1" weight="bold">
        모임 정보를
        <br />
        입력해주세요.
      </Typography>
      <Input
        label="닉네임"
        description="모임에서 사용할 닉네임을 5자 이내로 입력해주세요."
        placeholder="닉네임을 입력해주세요."
      />
      <Input
        label="모임 이름"
        description="모임 이름을 10자 이내로 입력해주세요."
        placeholder="모임 이름을 입력해주세요."
      />
      <Input
        label="모임 설명"
        description="모임 설명을 15자 이내로 입력해주세요."
        placeholder="모임 설명을 입력해주세요."
        required={false}
      />
      <ButtonGroup
        label="중간 장소 추천"
        name="group"
        options={[
          {
            id: "option1",
            label: "필요해요",
            value: true,
            defaultChecked: true,
          },
          {
            id: "option2",
            label: "다음에 받을래요",
            value: false,
          },
        ]}
      />
    </Layout>
    <FixedButton>입력 완료</FixedButton>
  </>
);

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  padding: 26px;

  > span {
    display: inline-block;
    padding-bottom: 10px;
  }
`;
