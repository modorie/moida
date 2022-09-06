import PaletteType, { PaletteKey } from './Palette.types'

const Palette: PaletteType = {
  // Blue
  blue50: '#E7F8FF',
  blue100: '#34B6EA',
  blue200: '#00A4E5',
  blue300: '#1786FF',
  blue400: '#104270',
  blue500: '#00305B',

  // Green
  green50: '#DBFAB5',
  green100: '#A0F435',
  green200: '#9BE400',

  // Coral
  coral100: '#EE7F7B',
  coral200: '#FA6C67',

  // White
  white: '#FFFFFF',

  // Gray
  gray100: '#F6F6F6',
  gray200: '#EEEEEE',
  gray300: '#DDDDDD',
  gray400: '#CCCCCC',
  gray500: '#AAAAAA',
  gray600: '#999999',
  gray700: '#666666',
  gray800: '#444444',
  gray900: '#333333',

  // Black
  black: '#000000',
}

export const paletteList: PaletteKey[] = Object.keys(Palette) as PaletteKey[]

export default Palette
