import { Text } from "@/components";

import { Layout, SymbolBox, NameBox } from "./StationInfo.styled";
import { LineSymbol } from "./LineSymbol";
import stations from "./assets/stations";
import type StationType from "./StationInfo.types";

const StationInfo = ({ name }: StationType) => (
  <Layout>
    <SymbolBox>
      {stations[name]?.map((lineName) => (
        <LineSymbol name={lineName} key={lineName} />
      ))}
    </SymbolBox>
    <NameBox color={stations[name]?.[0]}>
      <Text>{name.slice(0, -1)}</Text>
    </NameBox>
  </Layout>
);

export default StationInfo;
