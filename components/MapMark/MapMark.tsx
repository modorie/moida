import { Text } from "@/components";

import { Layout, TextBox, Mark } from "./MapMark.styled";
import type { MapMarkProps } from "./MapMark.types";

const MapMark = ({ children }: MapMarkProps) => (
  <Layout>
    {children && (
      <TextBox>
        <Text size="body1" weight="bold" color="white" whiteSpace="nowrap">
          {children}
        </Text>
      </TextBox>
    )}
    <Mark />
  </Layout>
);

export default MapMark;
