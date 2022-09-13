import React from "react"
import { Outlet } from "react-router-dom"
import { Tabbar } from "react-vant"
import { useNavigate, useLocation, Navigate } from "react-router-dom"
import { TabBarArr } from "./constant"
//@ts-ignore
import style from "./index.module.less"

const Index: React.FC = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const defaultValue = TabBarArr.findIndex(item => item.path == pathname)
  const handleTabBarChange = (item: number | string) => {
    const SelectItem = TabBarArr[item as number]
    navigate(SelectItem.path)
  }
  const userinfo = window.sessionStorage.getItem("userinfo")
  if (!userinfo) {
    return <Navigate to="/login"></Navigate>
  } else {
    return (
      <div className={style.containerAllMy}>
        <div className={style.mainContainer}>
          <Outlet></Outlet>
        </div>
        <Tabbar defaultValue={defaultValue} onChange={handleTabBarChange}>
          {TabBarArr.map((item, index) => {
            return (
              <Tabbar.Item key={index} icon={item.icon} badge={item.config}>
                {item.name}
              </Tabbar.Item>
            )
          })}
        </Tabbar>
      </div>
    )
  }
}

export default Index
