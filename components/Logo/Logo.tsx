import React from "react";

import { Symbol, Spacing, Wordmark } from "./";

import type LogoProps from "./Logo.types";

const Logo = ({ symbol, wordmark = true, height = 40 }: LogoProps) => {
  return (
    <div>
      {symbol && <Symbol height={height} />}
      {symbol && wordmark && <Spacing height={height} />}
      {wordmark && <Wordmark height={height} />}
    </div>
  );
};

export default Logo;
