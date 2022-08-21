import type { SvgProps } from "../";

const X = (props: SvgProps) => (
  <svg {...props}>
    <path
      d="M8 8L22 22"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 22L22 8"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default X;
