import { ColorKey } from '@/foundations'

import { Layout } from './LoadingDots.styled'

export interface LoadingDotsProps {
  color?: ColorKey | 'currentColor'
}

const LoadingDots = ({ color = 'currentColor' }: LoadingDotsProps) => {
  return (
    <Layout color={color}>
      <span />
    </Layout>
  )
}

export default LoadingDots
