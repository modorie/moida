import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`

export const HeaderButton = styled.button`
  background: none;
  border: none;

  height: 30px;
`

export const Body = styled.div`
  width: 100%;
`

export const BodyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const BodyTable = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const DateButton = styled.button<{ selected: boolean }>`
  background: none;
  border: none;

  width: 30px;
  height: 30px;

  border-radius: 50%;

  ${({ selected }) => selected && 'background: #000; color: #fff;'}

  &:hover {
    background: #0006;
    color: #fff6;
  }

  &:disabled {
    color: #ccc;
  }
`
