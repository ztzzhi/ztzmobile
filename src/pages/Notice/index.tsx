import axios from "axios"
import React, { useState, useEffect } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { Toast, NavBar, Popover, Button } from "react-vant"
import { iconActions } from "./constant"
//@ts-ignore
import style from "./index.module.less"

const Index: React.FC = () => {
  const [mylist, setmylist] = useState<any>([])
  const getList = (list = []) => {
    axios
      .get(
        "https://www.fastmock.site/mock/e691a0e4c13d795a0ad56c0ad6f279d7/api/user"
      )
      .then((res: any) => {
        setmylist([...list, ...res.data.data])
      })
  }
  useEffect(() => {
    getList()
  }, [])

  const requestList = () => {
    return getList(mylist)
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
              <div className={style.chatContainer}>
                <div className={style.chatLeft}>
                  <img src="http://dummyimage.com/336x280" alt="" />
                </div>
                <div className={style.chatRight}>
                  <div className={style.chartRightTop}>
                    <div className={style.nameClass}>{it.name}</div>
                    <div className={style.timeClass}>{it.newTime}</div>
                  </div>
                  <div className={style.chartRightContent}>{it.content}</div>
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
