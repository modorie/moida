import { Text } from "@/components";

import { Radio } from "./Radio";
import { Layout } from "./ButtonGroup.styled";

import type { ButtonGroupProps } from "./ButtonGroup.types";

const ButtonGroup = ({ name, label, options }: ButtonGroupProps) => {
  return (
    <>
      {label && (
        <Text
          as="label"
          color="gray800"
          weight="bold"
          size="body2"
          style={{ display: "block", marginBottom: "9px" }}
        >
          {label}
        </Text>
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
