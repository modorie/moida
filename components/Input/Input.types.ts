import type { FormProps } from "@/types/FormProps";

enum InputType {
  Text = "text",
  Search = "search",
  Email = "email",
  Password = "password",
  Number = "number",
}

interface InputOptions {
  type?: InputType;
  label?: string;
  errorMsg?: string;
  description?: string;
}

export interface InputProps extends FormProps, InputOptions {}
