import { TextView } from "./Text.styled";
import type { TextProps } from "./Text.types";

const Text = ({
  as = "span",
  align = "inherit",
  children,
  color = "black",
  htmlFor,
  italic,
  size = "body2",
  textOverflow,
  underline,
  userSelect = "auto",
  weight = "regular",
  whiteSpace = "pre-line",
  id,
  style,
  className,
  ...props
}: TextProps) => (
  <TextView
    as={as}
    align={align}
    color={color}
    htmlFor={htmlFor}
    italic={italic}
    size={size}
    textOverflow={textOverflow}
    underline={underline}
    userSelect={userSelect}
    weight={weight}
    whiteSpace={whiteSpace}
    id={id}
    style={style}
    className={className}
    {...props}
  >
    {children}
  </TextView>
);

export default Text;
