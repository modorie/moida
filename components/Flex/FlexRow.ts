import styled from 'styled-components'

import { FlexProps } from './Flex.types'

const FlexRow = styled.div<FlexProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justify = 'flex-start' }) => justify};
  align-items: ${({ align = 'center' }) => align};
  gap: ${({ gap = 0 }) => gap}px;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'initial')};
`

export default FlexRow
