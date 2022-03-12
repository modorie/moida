import styled from "styled-components";

import { Theme, Transition } from "@/foundations";

export const Layout = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 50px;
  margin: 0 -15px;
  padding: 0 15px;
  border-radius: 4px;

  list-style: none;
  transition: ${Transition};
  user-select: none;
  cursor: pointer;

  :hover {
    background-color: ${Theme.bgColor.lighter};
  }

  :active {
    background-color: ${Theme.bgColor.light};
  }

  svg {
    position: relative;
    right: -5px;
  }
`;
