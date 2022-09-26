import styled from 'styled-components'

import { FlexProps } from './Flex.types'

const FlexCol = styled.div<FlexProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify = 'center' }) => justify};
  align-items: ${({ align = 'flex-start' }) => align};
  gap: ${({ gap = 0 }) => gap}px;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'initial')};
`

export default FlexCol
