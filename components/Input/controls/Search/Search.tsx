import { Icon } from '@/components'
import { OnClickProps } from '@/types/ComponentProps'

import { IconBox } from './Search.styled'

const Search = ({ onClick }: OnClickProps) => (
  <IconBox onClick={onClick}>
    <Icon name="search" color="gray900" />
  </IconBox>
)

export default Search
