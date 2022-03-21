import React from "react";
import { Story, Meta } from "@storybook/react";
import styled from "styled-components";

import Typography from "@/components/Typography";
import CheckBox from "./CheckBox";

import type { CheckBoxProps } from "./CheckBox.types";

export default {
  title: "Components/CheckBox",
  component: CheckBox,
} as Meta;

const Template: Story<CheckBoxProps> = (args) => <CheckBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  hasError: false,
  checked: false,
  children: "자동 로그인",
  errorMsg: "",
};
