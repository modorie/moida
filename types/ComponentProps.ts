export interface ChildrenProps<Children = React.ReactNode> {
  children?: Children;
}

export interface AsProps {
  as?: React.ElementType;
}

export interface DisableProps {
  disabled?: boolean;
}

export interface LoadingProps {
  loading?: boolean;
}

export interface StandardAttrProps {
  className?: string | undefined;
  id?: string;
  style?: React.CSSProperties;
}
