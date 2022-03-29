import React from "react";

import {
  Layout,
  HiddenCheckBox,
  StyledCheckBox,
  Label,
  ErrorText,
} from "./CheckBox.styled";

import type { CheckBoxProps } from "./CheckBox.types";

const CheckBox = ({ checked, hasError, errorMsg, children }: CheckBoxProps) => {
  return (
    <>
      <Layout>
        <HiddenCheckBox type={"checkbox"} checked={checked} />
        <StyledCheckBox checked={checked} hasError={hasError} />
        <Label size="body2" weight="bold" checked={checked}>
          {children}
        </Label>
      </Layout>

      {hasError && (
        <ErrorText size="cap1" weight="bold">
          {errorMsg}
        </ErrorText>
      )}
    </>
  );
};

export default CheckBox;
