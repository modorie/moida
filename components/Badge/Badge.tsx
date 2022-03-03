import React from "react";

import { Layout } from "./Badge.styled";
import type { BadgeProps } from "./Badge.types";

const Badge = ({ isOngoing = true }: BadgeProps) => {
  const text = isOngoing ? "진행중" : "종료";
  return (
    <Layout isOngoing={isOngoing} size="cap2" weight="medium">
      {text}
    </Layout>
  );
};

export default Badge;
