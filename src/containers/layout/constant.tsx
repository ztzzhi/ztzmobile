import { ChatO, HomeO, GoodsCollectO, UserO } from "@react-vant/icons"

export const TabBarArr = [
  {
    name: "首页",
    icon: <HomeO />,
    path: "/",
    config: {}
  },
  {
    name: "乐购",
    icon: <GoodsCollectO />,
    path: "/shop",
    config: { dot: true }
  },
  {
    name: "消息",
    icon: <ChatO />,
    path: "/notice",
    config: { content: 5 }
  },
  {
    name: "我的",
    icon: <UserO />,
    path: "/mine",
    config: { dot: false }
  }
]
