import React, { useState, useCallback, useMemo } from "react";
import { Tab } from "./Tab";

import { Layout } from "./Tabs.styled";
import type { TabsProps } from "./Tabs.types";

const Tabs = ({ tabItems }: TabsProps) => {
  const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);
  const handleClickTab = useCallback((tabIndex: number) => {
    setCurrentTabIndex(tabIndex);
  }, []);

  const Content = useMemo(() => {
    return tabItems.map((item, index) => (
      <Tab
        key={index}
        active={index === currentTabIndex}
        children={item}
        onClick={() => handleClickTab(index)}
      />
    ));
  }, [currentTabIndex, handleClickTab]);

  return <Layout>{Content}</Layout>;
};

export default Tabs;
