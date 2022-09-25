import { StandardAttrProps } from '@/types/ComponentProps'

export interface RadioProps extends Omit<StandardAttrProps, 'id'> {
  name?: string
  id: string
  label: string
  value: string
  defaultChecked?: boolean
}
