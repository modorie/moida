import { Text } from '@/components'

import stations from './assets/stations'
import { LineSymbol } from './LineSymbol'
import { Layout, NameBox, SymbolBox } from './StationInfo.styled'
import type StationType from './StationInfo.types'

const StationInfo = ({ name, id, className, style }: StationType) => (
  <Layout id={id} className={className} style={style}>
    <SymbolBox>
      {stations[name]?.map((lineName) => (
        <LineSymbol name={lineName} key={lineName} />
      ))}
    </SymbolBox>
    <NameBox color={stations[name]?.[0]}>
      <Text>{name.slice(0, -1)}</Text>
    </NameBox>
  </Layout>
)

export default StationInfo
