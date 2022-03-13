import React from "react";
import { Layout, LoadingBar } from "./FixedButton.styled";

import type { FixedButtonProps } from "./FixedButton.types";

const FixedButton = ({
  styleVariant = "primary",
  disabled,
  loading = false,
  children = "text",
}: FixedButtonProps) => {
  return (
    <Layout
      size="cap2"
      styleVariant={styleVariant}
      disabled={disabled}
      loading={loading}
    >
      {loading ? <LoadingBar /> : children}
    </Layout>
  );
};

export default FixedButton;
