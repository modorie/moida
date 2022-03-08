import React from "react";
import MapMark from "./MapMark";

export default {
  title: "Components/MapMark",
  component: MapMark,
  parameters: {
    layout: "centered",
  },
};

export const Default = ({ ...args }) => <MapMark {...args} />;
