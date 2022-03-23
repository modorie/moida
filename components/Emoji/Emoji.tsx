import React from "react";

import { EmojiText } from "./Emoji.styled";

import type EmojiProps from "./Emoji.types";

const Emoji = ({ children, size }: EmojiProps) => {
  return <EmojiText size={size}>{children}</EmojiText>;
};

export default Emoji;
