import { addDecorator } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import GlobalStyle from "../styles/global";

addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ["Foundations", "Components", "*"],
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: "iphone12mini",
  },
};
