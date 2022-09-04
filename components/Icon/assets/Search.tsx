import type { SvgProps } from '../'

const Search = (props: SvgProps) => (
  <svg {...props}>
    <rect
      x="6"
      y="5"
      width="17"
      height="17"
      rx="8.5"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <line
      x1="20.2728"
      y1="20"
      x2="24.5355"
      y2="24.2627"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Search
