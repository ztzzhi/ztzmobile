import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/store"
import { ConfigProvider } from "antd"
import enUS from "antd/lib/locale/en_US"
import zhCN from "antd/lib/locale/zh_CN"

const Index: any = ({ children }: any) => {
  const language = useSelector<RootState, string>(state => state.i18n.language)
  const [locale, setLocale] = useState(zhCN)
  useEffect(() => {
    if (language == "en") {
      setLocale(enUS)
    } else {
      setLocale(zhCN)
    }
  }, [language])

  return <ConfigProvider locale={locale}>{children}</ConfigProvider>
}
export default Index
