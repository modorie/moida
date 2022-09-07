import { FontWeightKey, FontWeightType } from './FontWeight.types'

const FontWeight: FontWeightType = {
  bold: 700,
  medium: 500,
  regular: 400,
  light: 300,
}

export const fontWeightList: FontWeightKey[] = Object.keys(
  FontWeight
) as FontWeightKey[]

export default FontWeight
