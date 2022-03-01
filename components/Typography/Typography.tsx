import React from "react";

import TypoView from "./Typography.styled";

import type TypoProps from "./Typography.types";

const Typography = ({ weight, size, color, children }: TypoProps) => {
  return (
    <TypoView weight={weight} size={size} color={color}>
      {children}
    </TypoView>
  );
};

export default Typography;
