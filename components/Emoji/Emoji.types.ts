import { ChildrenProps } from "@/types/ComponentProps";

import type { FontSizeKey } from "@/foundations/FontSize";

interface EmojiOptions {
  size?: FontSizeKey;
}

export default interface EmojiProps extends ChildrenProps, EmojiOptions {}
