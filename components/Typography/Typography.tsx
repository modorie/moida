import React from "react";

import TypoView from "./Typography.styled";
import { FontSize, FontWeight, Theme } from "@/foundations";

import type TypoProps from "./Typography.types";

const Typography = ({
  weight = FontWeight.regular,
  size = FontSize.body2,
  color = Theme.textColor.black,
  children,
}: TypoProps) => {
  return (
    <TypoView weight={weight} size={size} color={color}>
      {children}
    </TypoView>
  );
};

export default Typography;
