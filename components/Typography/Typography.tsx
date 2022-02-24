import React from "react";
import TextView from "./Typography.styled";
import TypoProps from "./Typography.types";
import { FontSize, FontWeight, Theme } from "@/foundations";

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
