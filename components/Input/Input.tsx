import React from "react";

import {
  Label,
  Layout,
  TextField,
  ErrorMsg,
  Description,
} from "./Input.styled";
import type { InputProps } from "./Input.types";

const Input = ({
  label,
  type = "text",
  hasError,
  required = true,
  disabled,
  errorMsg,
  description,
}: InputProps) => {
  return (
    <div>
      {label && (
        <Label color="darker" weight="bold" required={required}>
          {label}
        </Label>
      )}
      {description && (
        <Description color="lighter" size="cap1" weight="bold">
          {description}
        </Description>
      )}
      <Layout hasError={hasError} disabled={disabled}>
        <TextField
          placeholder="Placeholder"
          type={type}
          disabled={disabled}
          required={required}
        />
      </Layout>
      {hasError && (
        <ErrorMsg color="warning" size="cap1" weight="bold">
          {errorMsg}
        </ErrorMsg>
      )}
    </div>
  );
};

export default Input;
