import { addDecorator } from "@storybook/react";
// TODO : Alias 코드 동작은 하나 빨간 줄 출력
import GlobalStyle from "@/styles/global";

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
};
