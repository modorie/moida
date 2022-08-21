import { Text } from "@/components";

import { Layout, Arrow, ArrowBox } from "./HelperText.styled";
import type HelperProps from "./HelperText.types";

const HelperText = ({ children, color = "light" }: HelperProps) => (
  <Layout color={color}>
    <Text size="body3" weight="bold" color="white" whiteSpace="nowrap">
      {children}
    </Text>
    <ArrowBox>
      <Arrow color={color} />
    </ArrowBox>
  </Layout>
);

export default HelperText;
