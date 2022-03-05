import React from "react";

import GpsButton from "./GpsButton";

export default {
  title: "Components/GpsButton",
  component: GpsButton,
  parameters: {
    layout: "centered",
  },
};

export const Default = ({ ...args }) => <GpsButton {...args} />;
