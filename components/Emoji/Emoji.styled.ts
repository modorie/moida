import styled from "styled-components";

import { FontSize } from "@/foundations";
import { TypoStyle } from "@/components/Typography";

export const EmojiText = styled.i`
  ${TypoStyle}
  font-family: emoji;
  font-style: normal;
  font-size: ${({ size }) => (size ? FontSize[size] : "inherit")};
`;
