import axios from "axios"
import React, { useState, useEffect, useRef } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { Toast, NavBar, Popover, Button, Input } from "react-vant"
import { VolumeO, AddO, SmileO } from "@react-vant/icons"
import { useSelector, useDispatch } from "react-redux"
import { iconActions } from "./constant"
import { RootState } from "@/store"
import { userType } from "@/store/reducers/user"
//@ts-ignore
import style from "./index.module.less"
import Header from "@/components/Header"
import { useLocation } from "react-router-dom"
import { ws } from "@/socket/index"
import moment from "moment"
import { changeUserMessageAction } from "@/store/actions/user"

const Index: React.FC = () => {
  const [inputValue, SetInputValue] = useState("")
  const [sendVisible, setSendVisible] = useState(true)
  const containerRef = useRef<any>(null)
  const { userinfo, message: UserNoticeList } = useSelector<
    RootState,
    userType
  >(state => state.user)

  const dispatch = useDispatch()
  // console.log(userinfo, "userinfo")
  const { state } = useLocation()
  const anotherUser: any = Object.assign({}, state)
  // console.log(anotherUser, "state")
  // console.log(UserNoticeList, "messagemessage")
  const handleShowSendIcon = (isFocus: boolean) => {
    setSendVisible(isFocus)
  }
  ws.onmessage = function (evt: any) {
    if (evt.data) {
      const { messageList } = JSON.parse(evt.data)
      window.sessionStorage.setItem("usermessage", JSON.stringify(messageList))
      dispatch(changeUserMessageAction(messageList))
    }
  }
  useEffect(() => {
    window.scrollTo(
      0,
      (document.querySelector("#container") as HTMLElement).clientHeight
    )
  })
  const handleSendMessage = () => {
    if (!inputValue) {
      return
    }
    const message = {
      id: UserNoticeList.length + 1,
      from: userinfo.node_id,
      to: anotherUser.node_id,
      updateTime: moment().format("HH:mm"),
      msg: inputValue
    }
    ws.send(JSON.stringify(message))
    SetInputValue("")
  }
  return (
    <div className={style.navbar} id="navbar" ref={containerRef}>
      <Header title="聊天" fixed></Header>
      <div className={style.container} id="container">
        {UserNoticeList.map((item: any, index: any) => {
          return (
            <div key={index}>
              <div className={style.updateTime}>{item.updateTime}</div>
              <div
                className={`${style.messageContent}  ${
                  userinfo.node_id === item.from
                    ? style.ImageRight
                    : style.ImageLeft
                }`}
              >
                <img
                  className={`${style.userImage} ${
                    userinfo.node_id === item.from ? style.ImageOrder : ""
                  }`}
                  src={
                    userinfo.node_id === item.from
                      ? userinfo.avatar_url
                      : anotherUser.avatar_url
                  }
                  alt=""
                />
                <div
                  className={`${style.textClass} ${
                    userinfo.node_id === item.from
                      ? style.textRightBgc
                      : style.textLeftBgc
                  }`}
                >
                  {item.msg}
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className={style.bottomFixed}>
        <div className={style.messageSend}>
          <VolumeO />
          <div className={style.InputClass}>
            <Input
              value={inputValue}
              onChange={value => SetInputValue(value)}
              onBlur={() => handleShowSendIcon(true)}
              onFocus={() => handleShowSendIcon(false)}
              placeholder="发消息..."
            ></Input>
          </div>

          {/* {sendVisible ? (
            <Button className={style.sendBtn} type="primary" size="small">
              发送
            </Button>
          ) : (
            <>
              <SmileO />
              <AddO style={{ margin: "0 10px 0 5px" }} />
            </>
          )} */}
          <Button
            onClick={handleSendMessage}
            className={style.sendBtn}
            type="primary"
            size="small"
          >
            发送
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Index
