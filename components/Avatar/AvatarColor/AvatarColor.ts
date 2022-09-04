import AvatarColorType, { AvatarColorName } from './AvatarColor.types'

const AvatarColor: AvatarColorType = {
  pink: '#FFE9F1',
  red: '#FFEAE6',
  orange: '#FFEAD8',
  lemon: '#FFFACC',
  yellow: '#FFF3C9',
  lightgreen: '#F4FEB4',
  green: '#DCFAF4',
  blue: '#EAF2FF',
  purple: '#F3EAFF',
  gray: '#EBEBFF',
}

export const AvatarColorList: AvatarColorName[] = Object.keys(
  AvatarColor
) as AvatarColorName[]

export default AvatarColor
