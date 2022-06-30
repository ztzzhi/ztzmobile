import React from "react"
import HeaderSelf from "./header/header"
import MenuSelf from "./menu/menu"
import { Layout } from "antd"
import { Outlet } from "react-router-dom"
import style from "./index.module.less"

const { Header, Sider, Content } = Layout
function Index() {
  return (
    <div>
      <Layout className={style.admin}>
        <Header className={style.header}>
          <HeaderSelf></HeaderSelf>
        </Header>
        <Layout className={style.content}>
          <Sider>
            <MenuSelf></MenuSelf>
          </Sider>
          <Content>
            <Outlet></Outlet>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default Index
