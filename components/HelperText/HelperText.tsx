import React from "react";

import { Layout, Arrow, ArrowBox } from "./HelperText.styled";
import type HelperProps from "./HelperText.types";

const HelperText = ({ children, color = "light" }: HelperProps) => (
  <>
    <Layout color={color} size="body3" weight="bold">
      {children}
      <ArrowBox>
        <Arrow color={color} />
      </ArrowBox>
    </Layout>
  </>
);

export default HelperText;
