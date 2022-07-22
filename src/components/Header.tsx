import React from "react"
import { NavBar, Loading } from "react-vant"
import { ArrowLeft, Ellipsis } from "@react-vant/icons"
import { useNavigate } from "react-router-dom"
interface Iprops {
  title?: string
  onClickRight?: () => void
  leftText?: string
  rightText?: string
  fixed?: boolean
}
const Index: any = (props: Iprops) => {
  const navigate = useNavigate()
  const onClickLeft = () => navigate(-1)
  const onClickRight = () =>
    typeof props.onClickRight === "function" && props.onClickRight()
  return (
    <NavBar
      title={props?.title || "标题"}
      leftArrow={<ArrowLeft />}
      fixed={!!props.fixed}
      leftText={props?.leftText || ""}
      rightText={<Ellipsis />}
      onClickLeft={onClickLeft}
      onClickRight={onClickRight}
    ></NavBar>
  )
}
export default Index
