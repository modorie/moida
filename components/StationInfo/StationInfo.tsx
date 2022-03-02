import React from "react";

import { Layout, SymbolBox, NameBox } from "./StationInfo.styled";
import { LineSymbol } from "./LineSymbol";
import { Typography } from "@/components";
import stations from "./assets/stations";

import type StationType from "./StationInfo.types";

const StationInfo = ({ name = "강남역" }: StationType) => {
  return (
    <Layout>
      <SymbolBox>
        {stations[name].map((lineName) => (
          <LineSymbol name={lineName} />
        ))}
      </SymbolBox>
      <NameBox color={stations[name][0]}>
        <Typography>{name.slice(0, -1)}</Typography>
      </NameBox>
    </Layout>
  );
};

export default StationInfo;
