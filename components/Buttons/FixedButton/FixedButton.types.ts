import type {
  ChildrenProps,
  DisableProps,
  LoadingProps,
} from '@/types/ComponentProps'

type StyleType = 'primary' | 'secondary'

interface FixedButtonOptions {
  styleVariant?: StyleType
}

// prettier-ignore
export interface FixedButtonProps extends ChildrenProps, DisableProps, LoadingProps, FixedButtonOptions {}
