import React from "react"
import { Menu } from "antd"
import { Link } from "react-router-dom"
import menuList, { menuItemType } from "./menuList"
import { createFromIconfontCN } from "@ant-design/icons"
import { useLocation } from "react-router-dom"
//@ts-ignore
import style from "./index.module.less"

const { SubMenu } = Menu

const Index: React.FC = () => {
  const handleClick = ({ domEvent }: any) => {
    const documentTitle = domEvent!.target.innerText
    document.title = documentTitle
  }
  const selectKey = useLocation().pathname.split("/")
  const openKeys = useLocation().pathname.split("/").slice(2)
  const IconFont = createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_3135910_afa4enq3jwv.js"
  })
  const createMenu = (menus: menuItemType[]) => {
    return menus.map(menu => {
      if (!menu.children) {
        return (
          <Menu.Item
            className="customclass"
            key={menu.key}
            icon={
              <IconFont
                type={menu.icon as string}
                style={{ marginRight: "6px" }}
              />
            }
          >
            <Link to={menu.path as string}>{menu.title}</Link>
          </Menu.Item>
        )
      } else {
        return (
          <SubMenu
            key={menu.key}
            title={menu.title}
            icon={
              <IconFont
                type={menu.icon as string}
                style={{ marginRight: "6px" }}
              />
            }
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
        defaultSelectedKeys={[""]}
        selectedKeys={selectKey}
        defaultOpenKeys={openKeys}
        mode="inline"
        theme="dark"
        className={style["left-nav-menu"]}
        onClick={handleClick}
      >
        {createMenu(menuList.gv)}
      </Menu>
    </div>
  )
}

export default Index
