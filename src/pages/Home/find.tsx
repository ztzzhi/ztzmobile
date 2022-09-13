import React, { useEffect, useState } from "react"
//@ts-ignore
import style from "./index.module.less"
import { Tabs, List } from "react-vant"
import { TabsKindsArr, IUserData } from "./constant"
import { LikeO } from "@react-vant/icons"
import Macy from "macy"
import axios from "axios"
import MyLoading from "@/components/Loading"

export const Find: React.FC = () => {
  const [active, SetActive] = useState("TJ")
  const [visible, setVisible] = useState(false)
  const [mylist, setmylist] = useState<any>([])
  const [macy, SetMacy] = useState<any>(null)
  const [page, setPage] = useState(0)

  useEffect(() => {
    InitMacy()
  }, [mylist])

  const debounce = (fn: any, time: number) => {
    let timeout: any = null
    return () => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        fn()
      }, time)
    }
  }

  const getList = () => {
    if (visible) return
    setVisible(true)
    setPage((currentPage: any) => {
      axios
        .get(
          `https://1.117.155.84:7001/v1/news/newslist?type=it&page=${
            currentPage + 1
          }&num=${30}`
        )
        .then(res => {
          setmylist((list: any) => {
            return [...list, ...res.data.result]
          })
          setVisible(false)
        })
      return currentPage + 1
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
          container: "#macy-container",
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
      }, true)
      // runOnImageLoad 这个方法 第二个参数为true 表示图片每一张加载都会执行 这样就不会有排版的的闪烁问题
    }
  }

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
      <div className={style.mainList}>
        <List
          onLoad={debounce(() => {
            getList()
          }, 500)}
          finished={false}
          finishedText={"没有更多了～"}
          offset={200}
        >
          <div id="macy-container">
            {mylist.map((it: any, index: any) => {
              return (
                <div
                  key={index}
                  className={style.item}
                  onClick={() => window.open(it.url)}
                >
                  <img src={it.picUrl} alt="" />
                  <div className={style.footer}>
                    <div>
                      <span className={style.spanclass}>{it.title}</span>
                    </div>
                    <div className={style.footerMainBom}>
                      <div className={style.footerLeft}>
                        <img
                          src={
                            "https://img2.baidu.com/it/u=3719952796,4013830643&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                          }
                          alt=""
                        />
                        <span style={{ marginLeft: "5px" }}>{it.source}</span>
                      </div>
                      <div className={style.footerRight}>
                        <LikeO className={style.heart} />
                        <span>{it.num || 999}</span>
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
