import { Text } from "@/components";

import HostBadge from "./HostBadge";
import { Layout } from "./Avatar.styled";
import { EmojiObj } from "./Avatar.types";
import type AvatarProps from "./Avatar.types";

const Avatar = ({ emoji, isHost }: AvatarProps) => {
  return (
    <Layout color={EmojiObj[emoji]}>
      <Text size="sub1">{emoji}</Text>
      {isHost && <HostBadge />}
    </Layout>
  );
};

export default Avatar;
