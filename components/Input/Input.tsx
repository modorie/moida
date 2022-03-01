import React from "react";

import {
  Label,
  Layout,
  TextField,
  ErrorMsg,
  Description,
} from "./Input.styled";
import { Clear, Manage, Search } from "./controls";

import type { InputProps, ControlType } from "./Input.types";

const Input = ({
  label,
  type = "text",
  hasError,
  required = true,
  disabled,
  errorMsg,
  description,
  control = "clear",
}: InputProps) => {
  const ControlRender = (control: ControlType) => {
    switch (control) {
      case "clear":
        return !disabled && <Clear />;
      case "manage":
        return <Manage />;
      case "search":
        return <Search />;
    }
  };

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
        {control && ControlRender(control)}
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
