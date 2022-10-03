import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm|txt)$/,
      loader: 'file-loader',
      options: {
        publicPath: 'public',
      },
    })

    return config
  },
}

module.exports = nextConfig

export {}
