import { useState } from 'react'

import { Tab } from './Tab'
import { Layout } from './Tabs.styled'
import type { TabsProps } from './Tabs.types'

const Tabs = ({ tabItems }: TabsProps) => {
  const [currentTabIndex, setCurrentTabIndex] = useState<number>(0)

  const handleClickTab = (tabIndex: number) => {
    setCurrentTabIndex(tabIndex)
  }

  return (
    <Layout>
      {tabItems.map((item, index) => (
        <Tab
          key={index}
          active={index === currentTabIndex}
          onClick={() => handleClickTab(index)}
        >
          {item}
        </Tab>
      ))}
    </Layout>
  )
}

export default Tabs
