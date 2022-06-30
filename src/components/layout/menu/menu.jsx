import React from "react"
import { Menu } from "antd"
import { Link } from "react-router-dom"
import menuList from "./menuList"
import { createFromIconfontCN } from "@ant-design/icons"
import { useLocation } from "react-router-dom"
import style from "./index.module.less"

const { SubMenu } = Menu

export default function Index() {
  let selectKey = useLocation().pathname.split("/")
  let openKeys = useLocation().pathname.split("/").slice(2)
  const IconFont = createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_3135910_afa4enq3jwv.js"
  })
  const createMenu = menus => {
    return menus.map(menu => {
      if (!menu.children) {
        return (
          <Menu.Item
            key={menu.key}
            icon={<IconFont type={menu.icon} style={{ marginRight: "6px" }} />}
          >
            <Link to={menu.path}>{menu.title}</Link>
          </Menu.Item>
        )
      } else {
        return (
          <SubMenu
            key={menu.key}
            title={menu.title}
            icon={<IconFont type={menu.icon} style={{ marginRight: "6px" }} />}
          >
            {createMenu(menu.children)}
          </SubMenu>
        )
      }
    })
  }
  return (
    <div className={style["left-nav"]}>
      <Menu
        defaultSelectedKeys={"home"}
        selectedKeys={selectKey}
        defaultOpenKeys={openKeys}
        mode="inline"
        theme="dark"
        className={style["left-nav-menu"]}
      >
        {createMenu(menuList.gv)}
      </Menu>
    </div>
  )
}
