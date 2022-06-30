import React from "react"
//@ts-ignore
import img from "./image/welcome.png"
//@ts-ignore
import style from "./index.module.less"

const Index: React.FC = () => {
  return (
    <div className={style.home}>
      <img src={img} alt="" />
    </div>
  )
}
export default Index
