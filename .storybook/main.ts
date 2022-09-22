import path from 'path'
import { Configuration } from 'webpack'

module.exports = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  typescript: {
    check: true,
  },
  framework: '@storybook/react',
  staticDirs: ['../public'],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config: Configuration) => {
    if (config.resolve?.alias) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../'),
      }
    }

    return config
  },
}
