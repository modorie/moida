import React from "react";

import { Label, Input } from "./Radio.styled";
import { Typography } from "@/components";

import type { RadioProps } from "./Radio.types";

const Radio = ({
  name,
  id,
  label,
  value,
  defaultChecked = false,
}: RadioProps) => (
  <>
    <Input
      type="radio"
      name={name}
      id={id}
      value={value}
      defaultChecked={defaultChecked}
    />
    <Label for={id}>
      <Typography>{label}</Typography>
    </Label>
  </>
);

export default Radio;
