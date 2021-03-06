import React from "react";

import { Svg } from "./Clear.styled";
import { Theme } from "@/foundations";

const Clear = () => (
  <Svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="15" cy="15" r="10" fill={Theme.bgColor.light} />
    <path
      d="M12 12L18 18"
      stroke={Theme.textColor.light}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 18L18 12"
      stroke={Theme.textColor.light}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Clear;
