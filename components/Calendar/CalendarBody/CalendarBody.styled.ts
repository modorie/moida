import styled from 'styled-components'

export const Layout = styled.div`
  width: 100%;
`

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.color.gray200};

  margin: 8px 0 20px;
`

export const CalendarRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 16px;
`

export const DayBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;
`

export const DateBox = styled.button<{
  selected: boolean
  today: boolean
  prev: boolean
  next: boolean
  firstDay: boolean
}>`
  border: none;

  width: 30px;
  height: 30px;

  border-radius: 50%;

  cursor: pointer;

  background: ${({ selected, theme }) =>
    selected ? theme.color.green300 : 'none'};

  color: ${({ selected, today, prev, next, theme }) =>
    selected
      ? theme.color.white
      : today
      ? theme.color.blue500
      : prev || next
      ? theme.color.gray400
      : theme.color.black};

  :hover {
    background: ${({ selected, theme }) =>
      selected ? theme.color.green200 : theme.color.green100};
    color: ${({ selected, theme }) =>
      selected ? theme.color.white : theme.color.gray500};
  }
`
