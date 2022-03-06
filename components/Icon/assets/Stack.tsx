import React from "react";

const Stack = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="6"
      y="7"
      width="18"
      height="6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <rect
      x="6"
      y="17"
      width="18"
      height="6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>
);

export default Stack;
