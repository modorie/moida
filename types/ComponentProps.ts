import React from "react";

export interface ChildrenProps<Children = React.ReactNode> {
  children?: Children;
}

export interface DisableProps {
  disabled?: boolean;
}

export interface LoadingProps {
  loading?: boolean;
}
