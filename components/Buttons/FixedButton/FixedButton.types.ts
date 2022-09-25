import type {
  ChildrenProps,
  DisableProps,
  LoadingProps,
  StandardAttrProps,
} from '@/types/ComponentProps'

type StyleType = 'primary' | 'secondary'

export interface FixedButtonProps
  extends ChildrenProps,
    DisableProps,
    LoadingProps,
    StandardAttrProps {
  styleVariant?: StyleType
}
