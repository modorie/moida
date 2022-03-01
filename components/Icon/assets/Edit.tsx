import React from "react";

const Edit = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.2035 13.4418L11.1453 23.5H6.503L6.5 18.8547L16.5582 8.79651L21.2035 13.4418Z"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.5582 8.79655L18.2903 7.06447C19.0429 6.31184 20.2632 6.31184 21.0158 7.06447L22.9355 8.98421C23.6882 9.73684 23.6882 10.9571 22.9355 11.7097L21.2034 13.4418V13.4418"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Edit;
