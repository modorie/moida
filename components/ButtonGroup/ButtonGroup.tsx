import React from "react";

import { Radio } from "./Radio";
import { Layout, Label } from "./ButtonGroup.styled";

import type { ButtonGroupProps } from "./ButtonGroup.types";

const ButtonGroup = ({ name, label, options }: ButtonGroupProps) => {
  return (
    <>
      {label && (
        <Label color="darker" weight="bold">
          {label}
        </Label>
      )}
      <Layout>
        {options.map(({ id, label, value, defaultChecked }) => (
          <Radio
            id={id}
            name={name}
            label={label}
            value={value}
            defaultChecked={defaultChecked}
            key={id}
          />
        ))}
      </Layout>
    </>
  );
};

export default ButtonGroup;
