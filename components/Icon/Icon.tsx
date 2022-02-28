import React from "react";

import Svg from "./Icon.styled";
import icons from "./assets";

import type IconProps from "./Icon.types";

const Icon = ({ name }: IconProps) => {
  return <Svg as={icons[name]} />;
};

export default Icon;
