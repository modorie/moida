import type { NextConfig } from 'next'

const nextConfig = {
  webpack: (config: NextConfig) => {
    config.module.rules.push({
      test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm|txt)$/,
      loader: 'file-loader',
      options: {
        publicPath: 'public',
      },
      env: {
        PUBLIC_KAKAO_MAP_API_KEY: process.env.PUBLIC_KAKAO_MAP_API_KEY,
      },
    })

    return config
  },
}

module.exports = nextConfig

export {}
