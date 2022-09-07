import styled from 'styled-components'

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  position: relative;

  height: 48px;
  border: 1px solid transparent;
  border-radius: 4px;

  color: ${({ theme }) => theme.color.gray500};
  transition: ${({ theme }) => theme.transition} color;
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.color.gray700};
  }
`

export const Input = styled.input`
  display: none;

  :checked + ${Label} {
    border: 1px solid ${({ theme }) => theme.color.blue200};
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.blue200};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`
