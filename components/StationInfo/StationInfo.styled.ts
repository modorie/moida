import styled from 'styled-components'

import { LineColor } from './LineColor'
import type { LineName } from './StationInfo.types'

interface NameBoxProps {
  color: LineName
}

export const Layout = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  height: 49px;
`

export const SymbolBox = styled.div`
  display: flex;
  position: absolute;
  top: -4px;

  div {
    margin-left: -5px;

    :first-child {
      margin-left: 0;
    }
  }
`

export const NameBox = styled.div<NameBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 44px;
  min-width: 110px;
  padding: 0 32px;
  border: 3px solid ${({ color }) => LineColor[color]};
  border-radius: 44px;

  white-space: nowrap;
`
