import React, { useEffect, useState } from "react"
import { Button, Picker, Toast, Tabs, Loading, Overlay } from "react-vant"
//@ts-ignore
import style from "./index.module.less"
import { HeaderTabsArr } from "./constant"
import { Find } from "./find"
import { Attention } from "./attention"
import { City } from "./city"

const Index: React.FC = () => {
  const renderContent = (index: number) => {
    switch (index) {
      case 0:
        return <Attention></Attention>
        break
      case 1:
        return <Find></Find>
        break
      case 2:
        return <City></City>
        break

      default:
        return <Find></Find>
        break
    }
  }
  return (
    <div className={style.main}>
      <div className={style.HeaderTabs}>
        <Tabs active="FX" className={style.TabsForHeader}>
          {HeaderTabsArr.map((item, index) => (
            <Tabs.TabPane name={item.value} key={index} title={`${item.name}`}>
              {renderContent(index)}
            </Tabs.TabPane>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

export default Index
