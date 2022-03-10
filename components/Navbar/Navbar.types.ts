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

export interface NavBodyProps {
  isLogin: LoginType;
  topItemsLogin: itemOptions[];
  topItemsLogout: itemOptions[];
}

export interface NavFooterProps {
  isLogin: LoginType;
  bottomItems: itemOptions[];
}

export interface NavProps
  extends NavHeaderProps,
    NavBodyProps,
    NavFooterProps {}