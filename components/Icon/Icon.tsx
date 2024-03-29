import icons from './assets'
import Svg from './Icon.styled'
import type { IconProps } from './Icon.types'

const Icon = ({
  name,
  size = 30,
  color = 'black',
  id,
  className,
  style,
  ...props
}: IconProps): React.ReactElement<SVGElement> => (
  <Svg
    as={icons[name]}
    width={size}
    height={size}
    color={color}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    id={id}
    {...props}
  />
)
export default Icon
