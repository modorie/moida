import React from "react";
import { Story, Meta } from "@storybook/react";
import styled from "styled-components";

import Button from "./Button";
import type { ButtonProps } from "./Button.types";
import Typography from "@/components/Typography";

export default {
  title: "Components/Buttons/Button",
  component: Button,
} as Meta;

export const Default: Story<ButtonProps> = (args) => <Button {...args} />;

Default.args = {
  children: "text",
  styleVariant: "primary",
  disabled: false,
  loading: false,
};

export const Examples = () => (
  <Layout>
    <Typography size="sub1" weight="bold">
      Primary
    </Typography>

    <Button>text</Button>
    <Button disabled>text</Button>
    <Button loading>text</Button>

    <br />

    <Typography size="sub1" weight="bold">
      Secondary
    </Typography>

    <Button styleVariant="secondary">text</Button>
    <Button styleVariant="secondary" disabled>
      text
    </Button>
    <Button styleVariant="secondary" loading>
      text
    </Button>
  </Layout>
);

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
