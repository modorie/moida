interface RadioOptions {
  name?: string
  id: string
  label: string
  value: string
  defaultChecked?: boolean
}

export interface RadioProps extends RadioOptions {}
