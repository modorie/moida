import React from "react";
import { Layout, LoadingBar } from "./FixedButton.styled";

import type { FixedButtonProps } from "./FixedButton.types";

const FixedButton = ({
  styleVariant = "primary",
  disabled,
  loading = false,
  children,
}: FixedButtonProps) => {
  return (
    <Layout
      size="sub2"
      styleVariant={styleVariant}
      disabled={disabled}
      loading={loading}
    >
      {loading ? <LoadingBar /> : children}
    </Layout>
  );
};

export default FixedButton;
