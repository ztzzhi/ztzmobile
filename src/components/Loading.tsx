import React from "react"
import { Overlay, Loading } from "react-vant"
interface Iprops {
  visible: boolean
  duration: number
}
const Index: any = (props: Iprops) => {
  return (
    <Overlay
      lockScroll={true}
      duration={props.duration ? props.duration : 1500}
      zIndex={999999}
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(255, 255, 255, .9)"
      }}
      visible={props.visible}
    >
      <Loading size={30} color="#1492FF">
        <span style={{ fontSize: "16px", color: "#1492FF" }}>加载中...</span>
      </Loading>
    </Overlay>
  )
}
export default Index
