import styled, { css } from 'styled-components'
import { FontSize, FontWeight, Theme } from '@/foundations'

import { FontSizeKey, TitleList } from '@/foundations/FontSize'
import type TypoProps from './Typography.types'

export const TypoStyle = css<TypoProps>`
  font-size: ${({ size }) => (size ? FontSize[size] : FontSize.body2)}px;
  font-weight: ${({ weight }) => weight && FontWeight[weight]};
  color: ${({ color }) => color && Theme.textColor[color]};
  line-height: 130%;
  letter-spacing: ${({ size }) =>
    size && (TitleList as unknown as FontSizeKey).includes(size)
      ? '-0.03rem'
      : '-0.02rem'};
`

const Typography = styled.span<TypoProps>`
  ${TypoStyle}
`

export default Typography
