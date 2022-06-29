import { useState } from "react"

import { connect } from "react-redux"
import { changeTokenAction } from "../../store/actions/login"
import { Button } from "antd"
/*使用typescript开发react时候引入 *.module.less有所不同*/
const style = require("./index.module.css").default
import NotFound from "../NotFound"

const mutationState = (state: any) => state["login"]
const mutationAciton = (dispatch: any) => {
  return {
    changeToken: () => {
      return dispatch(changeTokenAction({ token: "19991" }))
    }
  }
}
const Index = function (props: any) {
  console.log(props, "props")
  const [state, setState] = useState(0)
  const handleChangeToken = () => {
    props.changeToken({ token: "1234567" })
  }
  return (
    <>
      <div className={style.login}>
        Login <span className={style.name}>123</span>
      </div>
      <div className={style.fa}>123</div>
      <div onClick={() => setState(state + 1)}>{state}</div>
      <div>我是store中的token:{props.token}</div>
      <Button onClick={handleChangeToken}>点我更改token</Button>

      <NotFound></NotFound>
    </>
  )
}

export default connect(mutationState, mutationAciton)(Index)
