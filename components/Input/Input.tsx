import { forwardRef, useCallback, useRef, useState } from 'react'

import { makeCombineRefs } from '@/utils/makeCombineRefs'

import { Clear } from './controls'
import { Description, ErrorMsg, Label, Layout, TextField } from './Input.styled'
import type { InputProps } from './Input.types'

const InputBase = (
  {
    label,
    type = 'text',
    required = true,
    disabled,
    errorMsg,
    description,
    placeholder = 'Placeholder',
    clearable = true,
    hasError,
    defaultValue,
    onChange,
    rightContent,
    id,
    className,
    style,
  }: InputProps,
  forwardedRef: React.ForwardedRef<HTMLInputElement>
) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const combineRefs = makeCombineRefs<HTMLInputElement>(inputRef, forwardedRef)
  const [hasValue, setHasValue] = useState(!!defaultValue)

  const activeClear = !disabled && clearable

  const onClickClear = useCallback(() => {
    if (inputRef.current && activeClear) {
      const setValue = Object?.getOwnPropertyDescriptor(
        HTMLInputElement.prototype,
        'value'
      )?.set
      const event = new Event('input', { bubbles: true })

      setValue?.call(inputRef.current, '')
      inputRef.current.dispatchEvent(event)
      setHasValue(false)
    }
  }, [activeClear])

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(event)
      }
      if (!hasValue && event.target.value) {
        setHasValue(true)
      } else if (hasValue && !event.target.value) {
        setHasValue(false)
      }
    },
    [onChange, hasValue]
  )

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
          ref={combineRefs}
          onChange={handleChange}
          id={id}
          className={className}
          style={style}
        />
        {activeClear && hasValue && <Clear onClick={onClickClear} />}
        {rightContent}
      </Layout>
      {hasError && (
        <ErrorMsg color="coral100" size="cap1" weight="bold">
          {errorMsg}
        </ErrorMsg>
      )}
    </div>
  )
}

const Input = forwardRef(InputBase)

export default Input
