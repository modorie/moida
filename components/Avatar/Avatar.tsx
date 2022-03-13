import React from "react";

import { Layout, Emoji } from "./Avatar.styled";

import AvatarProps, { EmojiObj } from "./Avatar.types";

const Avatar = ({ emoji }: AvatarProps) => {
  return (
    <Layout color={EmojiObj[emoji]}>
      <Emoji size="sub1">{emoji}</Emoji>
    </Layout>
  );
};

export default Avatar;
