import { Text } from "@/components";

import { Layout } from "./Tab.styled";
import type { TabProps } from "./Tab.types";

const Tab = ({ children, active, onClick }: TabProps) => (
  <Layout active={active} onClick={onClick}>
    <Text color="currentColor" weight="inherit">
      {children}
    </Text>
  </Layout>
);

export default Tab;
