import React from "react";

import { Layout, Text, Mark } from "./MapMark.styled";
import type { MapMarkProps } from "./MapMark.types";

const MapMark = ({ children }: MapMarkProps) => (
  <Layout>
    {children && (
      <Text size="body1" weight="bold" color="white">
        {children}
      </Text>
    )}
    <Mark />
  </Layout>
);

export default MapMark;
