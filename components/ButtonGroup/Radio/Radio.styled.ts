import styled from "styled-components";
import { Theme, FontWeight, Transition } from "@/foundations";

interface LabelProps {
  for: string;
}

export const Label = styled.label<LabelProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  position: relative;

  height: 48px;
  border: 1px solid transparent;
  border-radius: 4px;

  color: ${Theme.textColor.lighter};
  transition: ${Transition} color;
  cursor: pointer;

  :hover {
    color: ${Theme.textColor.dark};
  }
`;

export const Input = styled.input`
  display: none;

  :checked + ${Label} {
    border: 1px solid ${Theme.borderColor.primary};
    background-color: ${Theme.bgColor.white};
    color: ${Theme.textColor.primary};
    font-weight: ${FontWeight.bold};
  }
`;
