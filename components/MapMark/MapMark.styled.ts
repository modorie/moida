import styled from "styled-components";
import { Theme } from "@/foundations";

export const Layout = styled.div`
  position: relative;
  transform: translate(13px, 13px);

  width: 19px;
  height: 19px;
  border-radius: 19px;
  background-color: ${Theme.bgColor.primary};

  ::after {
    content: "";
    position: absolute;
    transform: translate(-13px, -13px);

    width: 45px;
    height: 45px;
    border-radius: 45px;

    background-color: ${Theme.bgColor.primary};
    opacity: 0.2;
  }
`;
