import styled from 'styled-components'

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
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

  /* TODO: CSS 구조 리팩터링 */
  color: ${({ selected, today, prev, next, theme }) =>
    selected
      ? theme.color.white
      : today
      ? theme.color.blue500
      : prev || next
      ? theme.color.gray500
      : theme.color.black};

  &:hover {
    background: ${({ theme }) => theme.color.green100};
    color: ${({ theme }) => theme.color.gray500};
  }
`
