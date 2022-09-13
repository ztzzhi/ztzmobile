import React, { useEffect, useRef, useState } from "react"
//@ts-ignore
import style from "./index.module.less"
import { Tabs, Toast, List } from "react-vant"
import { TabsKindsArr, UserData, IUserData } from "./constant"
import { LikeO } from "@react-vant/icons"
import InfiniteScroll from "react-infinite-scroll-component"
import Macy from "macy"
import axios from "axios"
import MyLoading from "@/components/Loading"

export const Find: React.FC = () => {
  const [active, SetActive] = useState("TJ")
  const [visible, setVisible] = useState(false)
  const [mylist, setmylist] = useState<IUserData[]>([])
  const [macy, SetMacy] = useState<any>(null)
  const debounce = (fn: any, time: number) => {
    let timeout: any = null
    return function () {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        fn()
      }, time)
    }
  }

  const requestList = debounce(() => {
    getList(mylist)
  }, 500)

  const getList = (list: IUserData[] = []) => {
    if (visible) return
    setVisible(true)
    axios
      .get(
        "https://www.fastmock.site/mock/e691a0e4c13d795a0ad56c0ad6f279d7/api/api/list"
      )
      .then(res => {
        setmylist([...list, ...res.data.data])
        setVisible(false)
      })
  }
  useEffect(() => {
    getList()
  }, [])

  const handleTabsChange = (key: any) => {
    SetActive(key)
    getList()
    macy.reInit()
  }

  const InitMacy = () => {
    if (!macy) {
      SetMacy(
        new Macy({
          container: "#macy-container", // 图像列表容器
          trueOrder: false,
          mobileFirst: true,
          waitForImages: false,
          margin: { x: 10, y: 10 },
          columns: 2 // 设置列数
        })
      )
    } else {
      macy.runOnImageLoad(function () {
        macy.reInit()
      })
    }
  }

  useEffect(() => {
    InitMacy()
  }, [mylist])

  return (
    <>
      <Tabs
        active={active}
        className={style.TabsForScroll}
        onChange={handleTabsChange}
      >
        {TabsKindsArr.map((item, index) => (
          <Tabs.TabPane
            name={item.value}
            key={index}
            title={`${item.name}`}
          ></Tabs.TabPane>
        ))}
      </Tabs>
      {/* <InfiniteScroll
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
        
      </InfiniteScroll> */}
      <div className={style.mainList}>
        <List
          onLoad={requestList}
          finished={false}
          finishedText={"没有更多了～"}
          offset={200}
        >
          <div id="macy-container">
            {macy &&
              mylist.map((it, index) => {
                return (
                  <div key={index} className={style.item}>
                    <img src={it.imgSrc} alt="" />
                    <div className={style.footer}>
                      <div>
                        <span className={style.spanclass}>{it.content}</span>
                      </div>
                      <div className={style.footerMainBom}>
                        <div className={style.footerLeft}>
                          <img src={it.userSrc} alt="" />
                          <span style={{ marginLeft: "5px" }}>{it.name}</span>
                        </div>
                        <div className={style.footerRight}>
                          <LikeO className={style.heart} />
                          <span>{it.num}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
          </div>
        </List>
      </div>
      <MyLoading visible={visible}></MyLoading>
    </>
  )
}