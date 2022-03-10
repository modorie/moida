import { UserProps } from "@/types/UserProps";

interface itemOptions {
  name: string;
  url: string;
}

type LoginType = boolean;

export interface NavHeaderProps {
  isLogin: LoginType;
  user?: UserProps;
}

interface NavOptions {
  topItemsLogin: itemOptions[];
  topItemsLogout: itemOptions[];
  bottomItems: itemOptions[];
}

export interface NavProps extends NavHeaderProps, NavOptions {}
