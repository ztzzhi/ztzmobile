import { USERINFO_CHANGE, USERMESSAGE_CHANGE } from "../constant"

export interface userType {
  userinfo: any
  message: any
}

const initState: userType = {
  userinfo:
    window.sessionStorage.getItem("userinfo") == null
      ? {}
      : JSON.parse(window.sessionStorage.getItem("userinfo") as any),
  message:
    window.sessionStorage.getItem("usermessage") == null
      ? []
      : JSON.parse(window.sessionStorage.getItem("usermessage") as any)
}

export default function userReducer(preState = initState, action: any) {
  const { type, data } = action
  let newState
  switch (type) {
    case USERINFO_CHANGE:
      newState = {
        ...initState,
        userinfo: data
      }
      break
    case USERMESSAGE_CHANGE:
      newState = {
        ...initState,
        message: data
      }
      break
    default:
      newState = preState
      break
  }
  return newState
}
