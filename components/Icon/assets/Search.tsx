import React from "react";

const Search = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="6"
        y="5"
        width="17"
        height="17"
        rx="8.5"
        stroke="currentColor"
        stroke-width="1.8"
      />
      <line
        x1="20.2728"
        y1="20"
        x2="24.5355"
        y2="24.2627"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Search;
