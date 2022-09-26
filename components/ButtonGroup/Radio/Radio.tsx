import { Text } from '@/components'

import { Input, Label } from './Radio.styled'
import type { RadioProps } from './Radio.types'

const Radio = ({
  name,
  id,
  label,
  value,
  defaultChecked = false,
  className,
  style,
}: RadioProps) => (
  <>
    <Input
      type="radio"
      name={name}
      id={id}
      value={value}
      defaultChecked={defaultChecked}
    />
    <Label htmlFor={id} className={className} style={style}>
      <Text color="currentColor" weight="inherit">
        {label}
      </Text>
    </Label>
  </>
)

export default Radio
