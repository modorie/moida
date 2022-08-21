import { ThemeProvider as StyledThemeProvider } from "styled-components";

import Theme from "@/styles/theme";
import type { ChildrenProps } from "@/types/ComponentProps";

export interface ThemeProviderProps extends ChildrenProps {}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <StyledThemeProvider theme={Theme}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;
