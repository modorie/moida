import React from "react";

const Stack = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="30"
      height="30"
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
        stroke-width="1.8"
        stroke-linejoin="round"
      />
      <rect
        x="6"
        y="17"
        width="18"
        height="6"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Stack;
