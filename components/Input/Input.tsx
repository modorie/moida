import { Clear, Manage, Search } from './controls'
import { Description, ErrorMsg, Label, Layout, TextField } from './Input.styled'
import type { ControlType, InputProps } from './Input.types'

const Input = ({
  label,
  type = 'text',
  hasError,
  required = true,
  disabled,
  errorMsg,
  description,
  placeholder = 'Placeholder',
  control = 'clear',
  id,
  className,
  style,
}: InputProps) => {
  const ControlRender = (control: ControlType) => {
    switch (control) {
      case 'clear':
        return !disabled && <Clear />
      case 'manage':
        return <Manage />
      case 'search':
        return <Search />
    }
  }

  return (
    <div>
      {label && (
        <Label color="gray800" weight="bold" size="body2" required={required}>
          {label}
        </Label>
      )}
      {description && (
        <Description color="gray500" size="cap1" weight="bold">
          {description}
        </Description>
      )}
      <Layout hasError={hasError} disabled={disabled}>
        <TextField
          placeholder={placeholder}
          type={type}
          disabled={disabled}
          required={required}
          id={id}
          className={className}
          style={style}
        />
        {control && ControlRender(control)}
      </Layout>
      {hasError && (
        <ErrorMsg color="coral100" size="cap1" weight="bold">
          {errorMsg}
        </ErrorMsg>
      )}
    </div>
  )
}

export default Input
