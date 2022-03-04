import React from "react";

import Svg from "./Icon.styled";
import icons from "./assets";

import type IconProps from "./Icon.types";

const Icon = ({ name, size = 30, color = "darkest" }: IconProps) => (
  <Svg as={icons[name]} width={size} height={size} color={color} />
);
export default Icon;
