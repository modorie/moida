import React from "react";

import { Layout, Emoji } from "./Avatar.styled";
import { HostBadge } from "./";

import AvatarProps, { EmojiObj } from "./Avatar.types";

const Avatar = ({ emoji, isHost }: AvatarProps) => {
  return (
    <Layout color={EmojiObj[emoji]}>
      <Emoji size="sub1">{emoji}</Emoji>
      {isHost && <HostBadge />}
    </Layout>
  );
};

export default Avatar;
