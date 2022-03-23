import styled from "styled-components";

import { FontSize } from "@/foundations";
import { TypoStyle } from "@/components/Typography";

import type EmojiProps from "./Emoji.types";
import type TypoProps from "@/components/Typography/Typography.types";

export const EmojiText = styled.i<EmojiProps & TypoProps>`
  display: inline-block;
  position: relative;
  top: -0.1em;

  ${TypoStyle}
  font-family: emoji;
  font-style: normal;
  font-size: ${({ size }) => (size ? FontSize[size] : "inherit")};
`;
