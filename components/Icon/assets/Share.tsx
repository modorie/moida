import React from "react";

const Share = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="8.5"
        cy="15"
        r="2.6"
        stroke="currentColor"
        stroke-width="1.8"
      />
      <circle
        cx="20.5"
        cy="9"
        r="2.6"
        stroke="currentColor"
        stroke-width="1.8"
      />
      <circle
        cx="20.5"
        cy="21"
        r="2.6"
        stroke="currentColor"
        stroke-width="1.8"
      />
      <line
        x1="10.6455"
        y1="12.6728"
        x2="17.6455"
        y2="9.67277"
        stroke="currentColor"
        stroke-width="1.8"
      />
      <line
        y1="-0.9"
        x2="7.61577"
        y2="-0.9"
        transform="matrix(0.919145 0.393919 0.393919 -0.919145 11 16.5)"
        stroke="currentColor"
        stroke-width="1.8"
      />
    </svg>
  );
};

export default Share;
