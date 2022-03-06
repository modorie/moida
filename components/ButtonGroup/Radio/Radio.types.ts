interface RadioOptions {
  name?: string;
  id: string;
  label: string;
  value: any;
  defaultChecked?: boolean;
}

export interface RadioProps extends RadioOptions {}
