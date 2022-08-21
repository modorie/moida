import type { SvgProps } from "../";

const ChevronLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props}>
    <path
      d="M18 8L10.2231 15L18 22"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ChevronLeft;
