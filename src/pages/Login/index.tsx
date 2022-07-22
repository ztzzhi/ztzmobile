// import React, { useState } from "react"

// import { useSelector, useDispatch } from "react-redux"
// import { changeTokenAction } from "../../store/actions/login"
// import { Button } from "react-vant"
// import { RootState } from "@/store"
// import { userType } from "@/store/reducers/login"
// //@ts-ignore
// import style from "./index.module.css"
// const Index: React.FC = () => {
//   const loginState = useSelector<RootState, userType>(state => state.login)
//   const dispatch = useDispatch()
//   const [state, setState] = useState(0)
//   const handleChangeToken = () => {
//     dispatch(changeTokenAction({ token: "1234567" }))
//   }
//   return (
//     <>
//       <div className={style.login}>
//         Login <span className={style.name}>123</span>
//       </div>
//       <div className={style.fa}>123</div>
//       <div onClick={() => setState(state + 1)}>{state}</div>
//       <div>我是store中的token:{loginState.token}</div>
//       <Button onClick={handleChangeToken}>点我更改token</Button>
//     </>
//   )
// }

// export default Index
import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { changeUserInfoAction } from "../../store/actions/user"

import { useNavigate } from "react-router-dom"
//@ts-ignore
import style from "./index.module.less"
import { Field, Button, Toast } from "react-vant"
import { EyeO, ClosedEye } from "@react-vant/icons"
export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [tel, setTel] = useState("") //手机号
  const [password, setPasswrod] = useState("") //密码
  const [isRicon, setisRicon] = useState(false) //密码框右侧图标
  // const token = sessionStorage.getItem("token")
  // useEffect(() => {
  //   if (token) navigate("/index")
  // }, [])
  //登录
  async function Login() {
    if (!tel) {
      Toast.fail("请输入账号")
    } else if (!password) {
      Toast.fail("请输入密码")
    } else {
      if (tel == "admin" && password == "admin") {
        Toast.success("登录成功")
        dispatch(
          changeUserInfoAction({
            login: "Admin",
            id: 1,
            node_id: "MDQ6VXNlcjE=",
            avatar_url: "https://avatars.githubusercontent.com/u/1?v=4"
          })
        )
        window.sessionStorage.setItem(
          "userinfo",
          JSON.stringify({
            login: "Admin",
            id: 1,
            node_id: "MDQ6VXNlcjE=",
            avatar_url: "https://avatars.githubusercontent.com/u/1?v=4"
          })
        )
        navigate("/")
      } else if (tel == "user" && password == "user") {
        Toast.success("登录成功")
        dispatch(
          changeUserInfoAction({
            login: "User",
            id: 2,
            node_id: "MDQ6VXNlcjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/2?v=4"
          })
        )
        window.sessionStorage.setItem(
          "userinfo",
          JSON.stringify({
            login: "User",
            id: 2,
            node_id: "MDQ6VXNlcjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/2?v=4"
          })
        )
        navigate("/")
      } else {
        Toast.fail("登录失败")
      }
    }
  }

  //密码右侧图标
  const passRicon =
    password !== "" ? (
      isRicon ? (
        <EyeO onClick={() => setisRicon(!isRicon)} />
      ) : (
        <ClosedEye onClick={() => setisRicon(!isRicon)} />
      )
    ) : (
      ""
    )

  return (
    <div id={style.login}>
      <main>
        <h1>欢迎</h1>

        <div className={style.tel}>
          手机号码
          <Field
            className={style.telinp}
            placeholder="请输入您的手机号"
            value={tel}
            onChange={setTel}
          />
        </div>
        <div className={style.tel + " " + style.password}>
          登录密码
          <Field
            className={style.telinp}
            type={isRicon ? "text" : "password"}
            rightIcon={passRicon}
            placeholder="请输入您的登录密码"
            value={password}
            onChange={setPasswrod}
          />
        </div>

        <Button onClick={Login} size="large" round color="#018FAD">
          登录
        </Button>
      </main>
    </div>
  )
}
