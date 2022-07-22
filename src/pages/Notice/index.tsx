import axios from "axios"
import React, { useState, useEffect } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { useNavigate } from "react-router-dom"
import { Toast, NavBar, Popover, Button } from "react-vant"
import { iconActions } from "./constant"
//@ts-ignore
import style from "./index.module.less"

const Index: React.FC = () => {
  const navigator = useNavigate()
  const [mylist, setmylist] = useState<any>([])
  const getList = (list = []) => {
    axios.get("https://api.github.com/users").then((res: any) => {
      setmylist([...list, ...res.data])
    })
  }
  useEffect(() => {
    getList()
  }, [])

  const requestList = () => {
    return getList(mylist)
  }
  const GoToChat = (item: any) => {
    navigator(`/chat_${item.node_id}`, { state: item })
  }
  return (
    <div className={style.main}>
      <NavBar
        safeAreaInsetTop
        title="消息"
        leftArrow={""}
        rightText={
          <div>
            <Popover
              placement="bottom-end"
              actions={iconActions}
              reference={<div style={{ fontSize: "12px" }}>开始聊天</div>}
            />
          </div>
        }
      />
      <div className={style.container}>
        <InfiniteScroll
          dataLength={mylist.length}
          next={requestList}
          hasMore={true}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>没有更多了～</b>
            </p>
          }
          loader={<h4 style={{ textAlign: "center" }}>Loading...</h4>}
        >
          {mylist.map((it: any, index: any) => {
            return (
              <div
                key={index}
                className={style.chatContainer}
                onClick={() => GoToChat(it)}
              >
                <div className={style.chatLeft}>
                  <img src={it.avatar_url} alt="" />
                </div>
                <div className={style.chatRight}>
                  <div className={style.chartRightTop}>
                    <div className={style.nameClass}>{it.login}</div>
                    <div className={style.timeClass}>
                      {it.newTime || "07-19"}
                    </div>
                  </div>
                  <div className={style.chartRightContent}>{it.node_id}</div>
                </div>
              </div>
            )
          })}
        </InfiniteScroll>
      </div>
    </div>
  )
}

export default Index
