import React from "react";

import TextView from "./Typography.styled";
import { FontSize, FontWeight, Theme } from "@/foundations";

import type TypoProps from "./Typography.types";

const Typography = ({
  weight = FontWeight.regular,
  size = FontSize.body2,
  color = Theme.textColor.black,
  children,
}: TypoProps) => {
  return (
    <TextView weight={weight} size={size} color={color}>
      {children}
    </TextView>
  );
};

export default Typography;
