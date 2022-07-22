import { USERINFO_CHANGE, USERMESSAGE_CHANGE } from "../constant"

export const changeUserInfoAction = (payload: any) => {
  return { type: USERINFO_CHANGE, data: payload }
}

export const changeUserMessageAction = (payload: any) => {
  return { type: USERMESSAGE_CHANGE, data: payload }
}
