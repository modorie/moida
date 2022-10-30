import { Text } from '@/components'
import { OnClickProps } from '@/types/ComponentProps'

import { Layout } from './Manage.styled'

const Manage = ({ onClick }: OnClickProps) => (
  <Layout onClick={onClick}>
    <Text size="body2" weight="bold" color="blue200">
      관리
    </Text>
  </Layout>
)

export default Manage
