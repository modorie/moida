import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { addDecorator } from '@storybook/react'
import React from 'react'

import ThemeProvider from '../providers/ThemeProvider'
import GlobalStyle from '../styles/global'

addDecorator((story) => (
  <ThemeProvider>
    <GlobalStyle />
    {story()}
  </ThemeProvider>
))

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Foundations', 'Components', '*'],
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone12mini',
  },
}
