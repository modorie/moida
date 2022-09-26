import { Text } from '@/components'

import { Layout } from './Avatar.styled'
import type AvatarProps from './Avatar.types'
import { EmojiObj } from './Avatar.types'
import HostBadge from './HostBadge'

const Avatar = ({ emoji, isHost, id, className, style }: AvatarProps) => {
  return (
    <Layout color={EmojiObj[emoji]} id={id} className={className} style={style}>
      <Text size="sub1">{emoji}</Text>
      {isHost && <HostBadge />}
    </Layout>
  )
}

export default Avatar
