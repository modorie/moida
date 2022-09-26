import { Text } from '@/components'

import { Layout } from './Badge.styled'
import type { BadgeProps } from './Badge.types'

const Badge = ({ isOngoing = true, id, className, style }: BadgeProps) => {
  const text = isOngoing ? '진행중' : '종료'
  return (
    <Layout isOngoing={isOngoing} id={id} className={className} style={style}>
      <Text size="cap2" weight="medium" color="white">
        {text}
      </Text>
    </Layout>
  )
}

export default Badge
