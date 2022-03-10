import React, { useState } from "react";
import styled from "styled-components";
import { Meta } from "@storybook/react";

import Keyframe from "./Keyframe";
import { Typography } from "@/components";
import { FontWeight, Theme, Transition } from "@/foundations";

import type { KeyframeKey } from "./Keyframe.types";

export default {
  title: "Foundations/Keyframe",
  parameters: {
    layout: "centered",
    viewport: {
      defaultViewport: "responsive",
    },
  },
} as Meta;

interface BoxProps {
  keyframe: KeyframeKey;
}

export const KeyframeTemplate = () => {
  const [keyframe, setKeyframe] = useState<KeyframeKey | undefined>(
    "slideInLeft"
  );

  const onClick = (value: KeyframeKey | undefined) => {
    setKeyframe(undefined);
    setTimeout(() => setKeyframe(value), 100);
  };

  return (
    <Layout>
      <BoxRange>{keyframe && <TransitionBox keyframe={keyframe} />}</BoxRange>
      <ButtonBox>
        <Button onClick={() => onClick("slideInLeft")}>
          <Typography>slideInLeft</Typography>
        </Button>
        <Button onClick={() => onClick("slideInUp")}>
          <Typography>slideInUp</Typography>
        </Button>
      </ButtonBox>
    </Layout>
  );
};

KeyframeTemplate.storyName = "Keyframe";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const BoxRange = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 400px;
  height: 400px;
  border: 1px solid ${Theme.borderColor.light};
  border-radius: 12px;
  background-color: ${Theme.bgColor.lighter};

  overflow: hidden;
`;

const TransitionBox = styled.div<BoxProps>`
  width: 100px;
  height: 100px;
  border-radius: 12px;
  background-color: ${Theme.bgColor.primary};
  animation: ${({ keyframe }) => Keyframe[keyframe]} ${Transition};
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
`;

// TODO : 버튼 컴포넌트 완성 시 교체
const Button = styled.button`
  width: 100px;
  height: 42px;
  border-radius: 42px;
  border: 1px solid ${Theme.borderColor.primary};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  background-color: ${Theme.bgColor.white};
  font-weight: ${FontWeight.bold};
  color: ${Theme.textColor.black};
  cursor: pointer;

  :active {
    transform: scale(0.95);
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05);
  }
`;
