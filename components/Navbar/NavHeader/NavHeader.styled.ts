import styled from 'styled-components'

export const Header = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.gray100};
`

export const Hgroup = styled.hgroup`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  /* TODO: 크로스 브라우징 이슈 체크 */
  gap: 20px;
  height: 112px;
`

export const Greeting = styled.h1`
  margin: 0 0 3px;
`

export const Message = styled.h2`
  > strong {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;

  width: 240px;
  height: 52px;
  padding: 0 20px;
  margin: 40px 0;
  border-radius: 6px;
  border: none;

  background-color: ${({ theme }) => theme.color.blue200};
  transition: ${({ theme }) => theme.transition};
  cursor: pointer;

  /* TODO 버튼 팔레트 추가시 수정 필요 */
  :active {
    background-color: ${({ theme }) => theme.color.blue300};
  }
`
