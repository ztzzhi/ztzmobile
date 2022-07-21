import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/store"
import { ConfigProvider } from "react-vant"
import enUS from "react-vant/es/locale/lang/en-US"
import zhCN from "react-vant/es/locale/lang/zh-CN"

const Index: any = ({ children }: any) => {
  const language = useSelector<RootState, string>(state => state.i18n.language)
  return (
    <ConfigProvider locale={language == "en" ? enUS : zhCN}>
      {children}
    </ConfigProvider>
  )
}
export default Index
