import { Text } from '@/components'

import { Layout } from './Avatar.styled'
import type AvatarProps from './Avatar.types'
import { EmojiObj } from './Avatar.types'
import HostBadge from './HostBadge'

const Avatar = ({ emoji, isHost }: AvatarProps) => {
  return (
    <Layout color={EmojiObj[emoji]}>
      <Text size="sub1">{emoji}</Text>
      {isHost && <HostBadge />}
    </Layout>
  )
}

export default Avatar
