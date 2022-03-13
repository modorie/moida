import React from "react";
import { Layout, LoadingBar } from "./Button.styled";

import type { ButtonProps } from "./Button.types";

const Button = ({
  styleVariant = "primary",
  disabled,
  loading = false,
  children = "text",
}: ButtonProps) => {
  return (
    <Layout
      size="cap2"
      styleVariant={styleVariant}
      disabled={disabled}
      loading={loading}
    >
      {/* TODO - Content, Icon을 따로 빼서 위에서 로직 처리 */}
      {loading ? <LoadingBar /> : children}
    </Layout>
  );
};

export default Button;
