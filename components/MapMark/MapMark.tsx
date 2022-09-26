import { Text } from '@/components'

import { Layout, Mark, TextBox } from './MapMark.styled'
import type { MapMarkProps } from './MapMark.types'

const MapMark = ({ children, id, className, style }: MapMarkProps) => (
  <Layout id={id} className={className} style={style}>
    {children && (
      <TextBox>
        <Text size="body1" weight="bold" color="white" whiteSpace="nowrap">
          {children}
        </Text>
      </TextBox>
    )}
    <Mark />
  </Layout>
)

export default MapMark
