import styled from "styled-components";

export const Layout = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 50px;
  margin: 0 -15px;
  padding: 0 15px;
  border-radius: 4px;

  list-style: none;
  transition: ${({ theme }) => theme.transition};
  user-select: none;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.color.gray100};
  }

  :active {
    background-color: ${({ theme }) => theme.color.gray100};
  }

  svg {
    position: relative;
    right: -5px;
  }
`;
