import React from "react";
import { Story } from "@storybook/react";

import LineSymbol from "./LineSymbol";
import { lineList } from "../LineColor/LineColor";

import type LineType from "./LineSymbol.types";

export default {
  title: "Components/StationInfo/LineSymbol",
  component: LineSymbol,
};

export const Default: Story<LineType> = ({ ...args }) => (
  <LineSymbol {...args} />
);

export const Examples = () =>
  lineList.map((name) => <LineSymbol name={name} />);
