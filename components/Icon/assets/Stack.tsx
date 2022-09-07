import type { SvgProps } from '../'

const Stack = (props: SvgProps) => (
  <svg {...props}>
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
)

export default Stack
