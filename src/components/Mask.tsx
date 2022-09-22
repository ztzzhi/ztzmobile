import React, { useState } from "react"
import { Button, Overlay } from "react-vant"
//@ts-ignore
import style from "./index.module.less"
import "./index.less"
import { LikeO } from "@react-vant/icons"
import { CSSTransition } from "react-transition-group"

const Index: any = (props: any) => {
  return (
    <div
      className={style.outContainer}
      style={{
        visibility: props.visible ? "visible" : "hidden"
      }}
    >
      <div
        onClick={() => {
          console.log(1)
        }}
        className={style.innerContainer}
      >
        <CSSTransition in={props.visible} timeout={1000} classNames="bosstext">
          <div
            className={style.item}
            onClick={e => {
              props.myClick(!props.visible)
            }}
          >
            <img src={props.visibleObj.picUrl} alt="" />
            <div className={style.footer}>
              <div>
                <span className={style.spanclass}>
                  {props.visibleObj.title}
                </span>
              </div>
              <div className={style.footerMainBom}>
                <div className={style.footerLeft}>
                  <img
                    src={
                      "https://img2.baidu.com/it/u=3719952796,4013830643&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                    }
                    alt=""
                  />
                  <span style={{ marginLeft: "5px" }}>
                    {props.visibleObj.source}
                  </span>
                </div>
                <div className={style.footerRight}>
                  <LikeO className={style.heart} />
                  <span>{props.visibleObj.num || 999}</span>
                </div>
              </div>
            </div>
          </div>
        </CSSTransition>
      </div>
    </div>
  )
}

export default Index
