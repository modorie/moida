import { Spacing, Symbol, Wordmark } from './'
import type LogoProps from './Logo.types'

const Logo = ({
  symbol,
  wordmark = true,
  height = 40,
  id,
  className,
  style,
}: LogoProps) => {
  return (
    <div id={id} className={className} style={style}>
      {symbol && <Symbol height={height} />}
      {symbol && wordmark && <Spacing height={height} />}
      {wordmark && <Wordmark height={height} />}
    </div>
  )
}

export default Logo
