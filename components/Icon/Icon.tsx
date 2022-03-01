import React from "react";

import Svg from "./Icon.styled";
import icons from "./assets";

import type IconProps from "./Icon.types";

const Icon = ({ name, width = "30", height = "30" }: IconProps) => {
  return <Svg as={icons[name]} width={width} height={height} />;
};

export default Icon;
