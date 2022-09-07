export type AvatarColorName =
  | 'pink'
  | 'red'
  | 'orange'
  | 'lemon'
  | 'yellow'
  | 'lightgreen'
  | 'green'
  | 'blue'
  | 'purple'
  | 'gray'

type AvatarColorType = Record<AvatarColorName, string>

export default AvatarColorType
