import { Svg } from './HostBadge.styled'

const HostBadge = () => {
  return (
    <Svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9" cy="9" r="9" />
      <path
        d="M6 7V11H12V7L10.4 8.77778L9.2 7L7.6 8.77778L6 7Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default HostBadge
